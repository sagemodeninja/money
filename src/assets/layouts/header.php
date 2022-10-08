<?php
    $userFirstname = @$_SESSION["user_firstname"];
    $userLastname = @$_SESSION["user_lastname"];
    $userEmail = @$_SESSION["user_email"];
?>

<header>
    <h1 id="app_name_branding">Finance Tracker</h1>
    
    <span><?php echo @"$userLastname, $userFirstname"; ?></span>
    <a href="/user/logout.php">Logout</a> <!-- Production... -->
    <div id="layout_user_avatar">
        <div id="inner_circle">
            <img src="beta/sample_profile.gif">
        </div>
    </div>
</header>