<?php
    session_start();
    include_once "user/login_guard.php";
    CheckLogin();
?>
<!DOCTYPE html>
<html lang="en-us">
<head>
    <?php include_once "assets/layouts/common_head_items.php" ?>
    <link rel="stylesheet" href="assets/styles/dashboard.css">
    <title>Financial - Home</title>
</head>
<body>
    <?php include_once "assets/layouts/header.php" ?>
    <fluent-navigation-view id="navigation_view" header="Home" pane-display-mode="left" header-src="tag" selects-on-load>
        <?php include_once "assets/layouts/navigation_items.php" ?>
            
        <fluent-navigation-view-header-content style="flex-direction: column; margin-right: 10px; min-width: 0;">
            <fluent-command-bar default-label-position="right" style="align-self: flex-end;">
                <fluent-app-bar-button id="refresh_command" icon="Refresh" label="Refresh" modifier="Control" key="R"></fluent-app-bar-button>
                <fluent-app-bar-button id="toggle_closed_command" icon="View" label="Show Closed Accounts" modifier="Control+Alt" key="V"></fluent-app-bar-button>
            </fluent-command-bar>
        </fluent-navigation-view-header-content>

        <fluent-navigation-view-content-frame style="position: relative;">
            <!-- layout-body-content -->
            <div id="layout_body" style="overflow-y: auto !important;">
                <div id="accounts_grid">
                </div>
            </div>
        </fluent-navigation-view-content-frame>        
    </fluent-navigation-view>

    <!-- SCRIPTS -->
    <?php include_once "assets/layouts/common_scripts.php"; ?>
    <script src="assets/scripts/ContextMenu.js"></script>
    <script src="assets/scripts/dashboard.js"></script>
</body>
</html>