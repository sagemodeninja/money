<?php
    session_start();
    include_once "../user/login_guard.php";
    CheckLogin();

    $userFirstname = @$_SESSION["user_firstname"];
    $userLastname = @$_SESSION["user_lastname"];
    $userEmail = @$_SESSION["user_email"];
    
    $accountTitle = @$_GET["title"];
    $accountId = @$_GET["account_id"];
    if(!isset($accountId)) {
        $accountId = -1;
    }
?>
<!DOCTYPE html>
<html lang="en-us">
<head>
    <?php include_once "../assets/layouts/common_head_items.php" ?>
    <link rel="stylesheet" href="../assets/styles/transaction.css">
    <link rel="stylesheet" href="../assets/styles/main.css">
    <link rel="stylesheet" href="../assets/styles/Modal.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <title>Financial - Transactions</title>
</head>
<body>
    <?php include_once "../assets/layouts/header.php" ?>
    <fluent-navigation-view id="navigation_view" header="<?php echo $accountTitle; ?>" pane-display-mode="left" header-src="tag" selects-on-load>
        <?php include_once "../assets/layouts/navigation_items.php" ?>
            
        <fluent-navigation-view-header-content style="flex-direction: column; margin-right: 10px; min-width: 0;">
            <div style="align-self: flex-end; display: flex;">
                <fluent-command-bar default-label-position="right">
                    <fluent-app-bar-button id="refresh_command" icon="Refresh" label="Refresh" modifier="Control" key="R"></fluent-app-bar-button>
                    <fluent-app-bar-button id="create_command" icon="Add" label="Create" modifier="Control" key="A"></fluent-app-bar-button>
                </fluent-command-bar>
                <select id="period">
                    <option>Loading...</option>
                </select>
            </div>
        </fluent-navigation-view-header-content>

        <fluent-navigation-view-content-frame style="position: relative;">
            <!-- layout-body-content -->
            <div id="layout_body">
                <div id="layout_workspace">
                    <div id="account_balances_root_container">
                        <table class="table">
                            <tr>
                                <th id="running_balance_head">Running Balance</th>
                                <th id="projected_balance_head">Projected Balance</th>
                            <tr>
                            <tr>
                                <td id="running_balance">-</td>
                                <td id="projected_balance">-</td>
                            </tr>
                        </table>
                    </div>
                    <div id="transaction_tab_root_container">
                        <fluent-tabs activeid="actual" id="transaction_tab">
                            <fluent-tab id="actual">Actual</fluent-tab>
                            <fluent-tab id="projection">Projection</fluent-tab>
                            <fluent-tab-panel>
                                <!--ACTUAL -->
                                <div class="transaction_tab" data-tab="actual">
                                    <p class="centered">Press "Refresh" to retrieve list.</p>
                                </div>
                            </fluent-tab-panel>
                            <fluent-tab-panel>
                                 <!--PROJECTION -->
                                <div class="transaction_tab" data-tab="projection">
                                    <p>Press "Refresh" to retrieve list.</p>
                                </div>
                            </fluent-tab-panel>
                        </fluent-tabs>
                    </div>
                </div>
            </div>
            
            <?php include_once "../assets/layouts/footer.php" ?>
        </fluent-navigation-view-content-frame>        
    </fluent-navigation-view>

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
    <?php include_once "../assets/layouts/common_scripts.php"; ?>
    <script src="../assets/scripts/ContextMenu.js"></script>
    <script src="../assets/scripts/DateTime.js"></script>
    <script src="../assets/scripts/Modal.js"></script>
    <script>const ACCOUNT_ID = <?php echo $accountId; ?>;</script>
    <script src="../assets/scripts/transaction.js"></script>
</body>
</html>