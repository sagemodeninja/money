<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/styles/components.css">

<style>
    .snap-view {
        height: 250px;
        width: 100%;
    }
    
    snap-view-panel {
        align-items: center;
        color: #000;
        display: flex;
        font-family: 'Manrope', sans-serif;
        font-size: 64px;
        font-weight: bold;
        justify-content: center;
    }
</style>

<div class="container">
    <div class="contentHeader">
        <h1 class="title">Hi, Gary</h1>
        <snap-view class="snap-view" id="test_container">
            <snap-view-panel>1</snap-view-panel>
            <snap-view-panel>2</snap-view-panel>
            <snap-view-panel>3</snap-view-panel>
        </snap-view>
    </div>
    <div class="contentBody">
        <account-card></account-card>
    </div>
</div>

<script src="/assets/scripts/lab.js"></script>