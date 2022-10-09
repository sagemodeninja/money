<?php
    function CheckLogin() {
        include_once $_SERVER['DOCUMENT_ROOT'] . "/helper.php";
        include_once $_SERVER['DOCUMENT_ROOT'] . "/secrets.php";

        $isSignedIn = @$_SESSION["user_is_signed-in"];
        $client_id =  GOOGLE_CLIENT_ID;
        $redirect_uri = GetHost() . "/user/verify_google.php";
        
        if(!isset($isSignedIn)) {
            header("location: https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=$client_id&redirect_uri=$redirect_uri&scope=openid+email+profile");
        }
    }
?>