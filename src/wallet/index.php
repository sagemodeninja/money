<?php
    session_start();
    include_once "../user/login_guard.php";
    CheckLogin();
?>
<!DOCTYPE html>
<html lang="en-us">
<head>
    <?php include_once "../includes/layouts/common_head_items.php" ?>
    <link rel="stylesheet" href="../assets/styles/main.css">
</head>
<body>
    <?php include_once "../includes/layouts/header.php" ?>
    <fluent-navigation-view id="navigation_view" header="Home" pane-display-mode="left" header-src="tag" selects-on-load>
        <?php include_once "../includes/layouts/navigation_items.php" ?>
            
        <fluent-navigation-view-header-content>
                <button id="refresh_button">Refresh</button>
                <button id="create_button">Create</button>
        </fluent-navigation-view-header-content>

        <fluent-navigation-view-content-frame style="position: relative;">
            <div id="wallet-grid"></div>
        </fluent-navigation-view-content-frame>        
    </fluent-navigation-view>

    <form-dialog id="form">
        <select name="user_id"></select>
        <input type="text" name="name" placeholder="Name"/>
        <button id="submit_button">Submit</button>
    </form-dialog>
    
    <!-- SCRIPTS -->
    <?php include_once "../includes/layouts/common_scripts.php"; ?>
    <script src="../assets/scripts/wallet.js"></script>
</body>
</html>