<?php
    session_start();
    include_once "user/login_guard.php";
    CheckLogin();
    require "vendor/autoload.php";
?>
<!DOCTYPE html>
<html lang="en-us">
<head>
    <?php include_once "assets/layouts/common_head_items.php" ?>
    <link rel="stylesheet" href="assets/minified/styles/dashboard.min.css">
    <title>Financial - Home</title>
</head>
<body>
    <?php include_once "assets/layouts/header.php" ?>
    <fluent-navigation-view id="navigation_view" header="Home" pane-display-mode="left" header-src="tag" selects-on-load>
        <?php include_once "assets/layouts/navigation_items.php" ?>
            
        <fluent-navigation-view-header-content style="flex-direction: column; margin-right: 10px; min-width: 0;">
            <fluent-command-bar default-label-position="right" style="align-self: flex-end;">
                <fluent-app-bar-button id="refresh_command" icon="Refresh" label="Refresh" modifier="Control+Alt" key="R"></fluent-app-bar-button>
                <fluent-app-bar-button id="toggle_closed_command" icon="View" label="Show Closed Accounts" modifier="Control+Alt" key="V"></fluent-app-bar-button>
            </fluent-command-bar>
        </fluent-navigation-view-header-content>

        <fluent-navigation-view-content-frame style="position: relative;">
            <!-- layout-body-content -->
            <div id="layout_body"></div>
        </fluent-navigation-view-content-frame>
    </fluent-navigation-view>

    <transaction-panel id="transaction_panel">
        <div>
            <fluent-app-bar-button id="create_command" icon="Add" label="Create" modifier="Control" key="A"></fluent-app-bar-button>
        </div>
        <div class="card-container">
            <account-card id="transaction_card">
                <card-balance data-title="Actual" id="running_balance"></card-balance>
                <card-balance data-title="Projection" id="projected_balance"></card-balance>
            </account-card>
        </div>
        <div class="transaction-container"></div>
    </transaction-panel>

    <fluent-dialog id="editor_dialog" hidden="true">
        <div class="dialog_content">
            <div class="dialog-header">
                <span class="dialog-title">Transaction</span>
                <fluent-app-bar-button id="dismiss_editor_dialog_btn" key="Escape" class="dialog-dismiss-button">
                    <fluent-symbol-icon symbol="ChromeClose" font-size="12" slot="icon"></fluent-symbol-icon>
                </fluent-app-bar-button>
            </div>
            <div class="dialog-body">
                <form id="editor">
                    <input type="hidden" name="Id">
                    <table>
                        <tr>
                            <td>
                                <label for="date">Date:</label>
                            </td>
                            <td>
                                <input type="date" name="Date" id="date" placeholder="yyyy-mm-dd">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="description">Description:</label>
                            </td>
                            <td>
                                <input type="text" name="Description" id="description" max="100">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="debit">Debit:</label>
                            </td>
                            <td>
                                <input type="number" name="Debit" id="debit">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="credit">Credit:</label>
                            </td>
                            <td>
                                <input type="number" name="Credit" id="credit">
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
            <div class="dialog-footer">
                <fluent-button id="save_btn" appearance="accent">Save</fluent-button>
            </div>
        </div>
    </fluent-dialog>

    <!-- SCRIPTS -->
    <?php include_once "assets/layouts/common_scripts.php"; ?>
    <script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
    <script src="assets/minified/scripts/dashboard.min.js"></script>
</body>
</html>