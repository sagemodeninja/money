<?php
    session_start();
    include_once "../user/login_guard.php";
    CheckLogin();

    $userFirstname = @$_SESSION["user_firstname"];
    $userLastname = @$_SESSION["user_lastname"];
    $userEmail = @$_SESSION["user_email"];
    
    $accountTitle = @$_GET["title"];
    $accountId = @$_GET["id"];
    $accountNumber = @$_GET["number"];
    $category = @$_GET["category"];

    if(!isset($accountId)) {
        $accountId = -1;
    }
?>
<!DOCTYPE html>
<html lang="en-us">
<head>
    <?php include_once "../assets/layouts/common_head_items.php" ?>
    <link rel="stylesheet" href="../assets/styles/transaction.css">
    <link rel="stylesheet" href="../assets/styles/dashboard.css">
    <link rel="stylesheet" href="../assets/styles/main.css">
    <link rel="stylesheet" href="../assets/styles/Modal.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <title>Financial - Transactions</title>
</head>
<body>
    <?php include_once "../assets/layouts/header.php" ?>
    <fluent-navigation-view id="navigation_view" header="<?php echo $accountTitle; ?>" pane-display-mode="left" header-src="tag" selects-on-load always-show-header="false">
        <?php include_once "../assets/layouts/navigation_items.php" ?>

        <fluent-navigation-view-content-frame style="position: relative;">
            <div style="display: flex; flex-direction: column; margin-right: 10px; min-width: 0;">
                <fluent-command-bar default-label-position="right" style="align-self: flex-end;">
                    <fluent-app-bar-button id="refresh_command" icon="Refresh" label="Refresh" modifier="Control" key="R"></fluent-app-bar-button>
                    <fluent-app-bar-button id="create_command" icon="Add" label="Create" modifier="Control" key="A"></fluent-app-bar-button>
                </fluent-command-bar>
            </div>

            <!-- layout-body-content -->
            <div id="layout_body">
                <div id="account_card_container">
                    <account-card data-title="<?php echo $accountTitle; ?>" data-number="<?php echo $accountNumber; ?>" data-category="<?php echo $category; ?>">
                        <card-balance data-title="Actual" id="running_balance"></card-balance>
                        <card-balance data-title="Projection" id="projected_balance"></card-balance>
                    </account-card>
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
    <script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
    <script src="../assets/scripts/AccountCard.js"></script>
    <script>const ACCOUNT_ID = <?php echo $accountId; ?>;</script>
    <script src="../assets/scripts/transaction.js"></script>
</body>
</html>