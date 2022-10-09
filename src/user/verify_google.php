<?php
session_start();
include_once "../crud/_db_provider.php";

$code = @$_GET["code"];
$clientId = "97270275700-k2pa3hcln03s57ohch5a6t5cjfl2cfho.apps.googleusercontent.com";
# $redirectURI = "http%3A//localhost:8081/user/verify_google.php"; # Local
$redirectURI = "https%3A//money.garyantier.com/user/verify_google.php"; # Production
$clientSecret = "ipTihVgu8mn7di-T9wkpGDIo";

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
$userExists = false;

// User exists
$conn = connect();
if($conn) {
    $query = "SELECT Id, Firstname, Lastname FROM user WHERE Email = '$email';";
    $data = $conn->query($query);
    
    if($data) {
        $userExists = $data->num_rows > 0;
        if($userExists) {
            $row = $data->fetch_assoc();
            $userId = $row["Id"];
            $firstname = $row["Firstname"];
            $lastname = $row["Lastname"];
        }
    } else {
        die( "An error occured! $error." );
    }
} else {
    die("An error occured! Can't connect to database.");
}

if($userExists && $aud === $clientId && $iss === "accounts.google.com") {
    $_SESSION["user_is_signed-in"] = true;
    $_SESSION["user_id"] = $userId;
    $_SESSION["user_firstname"] = $firstname;
    $_SESSION["user_lastname"] = $lastname;
    $_SESSION["user_email"] = $email;
    
    header("location: /"); # Local...
} else {
    echo "An error occured! User not found.";
}

?>