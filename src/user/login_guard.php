<?php
    function CheckLogin() {
        $isSignedIn = @$_SESSION["user_is_signed-in"];
        $client_id = "97270275700-k2pa3hcln03s57ohch5a6t5cjfl2cfho.apps.googleusercontent.com";
        $redirect_uri = "https://money.garyantier.com/user/verify_google.php";
        
        if(!isset($isSignedIn)) {
            header("location: https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=$client_id&redirect_uri=$redirect_uri&scope=openid+email+profile");
        }
    }
?>