<?php
    session_start();
    include_once "../user/login_guard.php";
    CheckLogin();
?>
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en-us">
<head>
    <?php include_once "../assets/layouts/common_head_items.php" ?>
    <link rel="stylesheet" href="../assets/styles/main.css">
</head>
<body>
    <?php include_once "../assets/layouts/header.php" ?>
    <fluent-navigation-view id="navigation_view" header="Home" pane-display-mode="left" header-src="tag" selects-on-load>
        <?php include_once "../assets/layouts/navigation_items.php" ?>
            
        <fluent-navigation-view-header-content>
                <button id="refresh_btn">Refresh</button>
                <button id="open_btn">New Period</button>
        </fluent-navigation-view-header-content>

        <fluent-navigation-view-content-frame style="position: relative;">
            <!-- layout-body-content -->
            <div id="layout_body">
                <div id="layout_actions">
                </div>
                <div id="layout_workspace" class="layout-body-content">
        
                    <table id="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="4" class="centered">Press "Refresh" to retrieve list.</td>
                            </tr>
                        </tbody>
                    </table>
        
                    <div id="editor_container">
                        <form id="editor">
                            <input type="hidden" name="Id">
                            <table>
                                <tr>
                                    <td>
                                        <label for="fromdate">From Date:</label>
                                    </td>
                                    <td>
                                        <input type="date" name="FromDate" id="fromdate" placeholder="yyyy-mm-dd">
                                    </td>
                                </tr>
                            </table>
                            <button type="button" id="save_btn">Save</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <?php include_once "../assets/layouts/footer.php" ?>
        </fluent-navigation-view-content-frame>        
    </fluent-navigation-view>

    <!-- SCRIPTS -->
    <?php include_once "../assets/layouts/common_scripts.php"; ?>
    <script src="../assets/scripts/period.js"></script>
</body>
</html>