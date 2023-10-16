<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
    .snap-view {
        border: solid 1px;
        height: 250px;
        width: 350px;
    }
    
    snap-view-panel {
        align-items: center;
        color: blue;
        display: flex;
        font-size: 64px;
        font-weight: bold;
        justify-content: center;
    }

    snap-view-panel:nth-of-type(even) {
        color: red;
    }
</style>

<snap-view class="snap-view" id="test_container">
    <snap-view-panel>1</snap-view-panel>
    <snap-view-panel>2</snap-view-panel>
    <snap-view-panel>3</snap-view-panel>
    <snap-view-panel>4</snap-view-panel>
    <snap-view-panel>5</snap-view-panel>
</snap-view>

<script src="/assets/scripts/lab.js"></script>