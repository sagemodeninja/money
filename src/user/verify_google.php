<?php
session_start();
include_once $_SERVER['DOCUMENT_ROOT'] . '/helper.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/database.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/models/user_model.php';

$code = @$_GET["code"];
$clientId =  getenv('GOOGLE_CLIENT_ID');
$redirectURI = getFullHost() . "/user/verify_google.php";
$clientSecret = getenv('GOOGLE_CLIENT_SECRET');

$idToken;
$userInfo;

// Id token
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://oauth2.googleapis.com/token",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_FAILONERROR => true,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "client_id=$clientId&redirect_uri=$redirectURI&client_secret=$clientSecret&code=$code&grant_type=authorization_code",
  CURLOPT_HTTPHEADER => array( "Content-Type: application/x-www-form-urlencoded" ),
));

$response = curl_exec($curl);
if($response !== false) {
    $idToken = json_decode($response)->id_token;
    curl_close($curl);
} else {
    $error = curl_error($curl);
    curl_close($curl);
    die( "An error occured! $error." );
}

// User info
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://oauth2.googleapis.com/tokeninfo?id_token=$idToken",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FAILONERROR => true
));

$response = curl_exec($curl);
if($response !== false) {
    $userInfo = json_decode($response);
    curl_close($curl);
} else {
    $error = curl_error($curl);
    curl_close($curl);
    die( "An error occured! $error." );
}

$userId;
$firstname;
$lastname;
$email = @$userInfo->email;
$aud = @$userInfo->aud;
$iss = str_replace("https://", "", @$userInfo->iss);
$picture = @$userInfo->picture;
$userExists = false;

$database = new Database('user', UserModel::class);
$user = $database->where('`email` = :email', ['email' => $email]);

$userExists = isset($user);

if($userExists) {
    $userId = $user->id;
    $firstname = $user->given_name;
    $lastname = $user->surname;
}

if($userExists && $aud === $clientId && $iss === "accounts.google.com") {
    $_SESSION["user_is_signed-in"] = true;
    $_SESSION["user_id"] = $userId;
    $_SESSION["user_firstname"] = $firstname;
    $_SESSION["user_lastname"] = $lastname;
    $_SESSION["user_email"] = $email;
    $_SESSION["user_picture"] = $picture;
    
    header("location: /"); # Local...
} else {
    echo "An error occured! User not found.";
}

?>