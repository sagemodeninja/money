<?php
    session_start();
    include_once "user/login_guard.php";
    CheckLogin();
?>
<!DOCTYPE html>
<html lang="en-us">
<head>
    <?php include_once "includes/layouts/common_head_items.php" ?>
    <link rel="stylesheet" href="assets/minified/styles/dashboard.min.css">
    <link rel="stylesheet" href="assets/fonts/geist/geist-variable.css">
    <title>Money</title>
</head>
<body>
    <div id="layout_body"></div>

    <!-- SCRIPTS -->
    <?php include_once "includes/layouts/common_scripts.php"; ?>
    <script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
    <script src="assets/scripts/dashboard.js"></script>
</body>
</html>