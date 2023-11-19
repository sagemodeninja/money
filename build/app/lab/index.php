<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>eMoney | Labs</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@600&display=swap" rel="stylesheet">
<script defer src="../../static/scripts/lab.js"></script><link href="../../static/styles/lab.css" rel="stylesheet"></head>
<body>
    <header>
        <h1>eMoney</h1>
    </header>
    <main>
        <section class="navigation"></section>
        <section class="pages homePage">
            <div class="contentHeader">
                <h1 class="title">Welcome back, Gary!</h1>
                <snap-view class="snap-view" id="test_container">
                    <snap-view-panel>1</snap-view-panel>
                    <snap-view-panel>2</snap-view-panel>
                    <snap-view-panel>3</snap-view-panel>
                </snap-view>
            </div>
            <div class="contentBody">
                <h1 class="title">Accounts</h1>
                <account-card></account-card>
                <account-card></account-card>
            </div>
        </section>
        <section class="pages accountPage">
        </section>
    </main>

    <script src="/assets/scripts/lab.js"></script>
</body>
</html>
