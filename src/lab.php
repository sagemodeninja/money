<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
    .snap-view {
        height: 250px;
        width: 350px;
    }
    
    .item {
        background-color: red;
        flex-shrink: 0;
        width: 100%;
        scroll-snap-align: center;
        scroll-snap-stop: always;

        color: #fff;
        text-align: center;
        font-size: 24px;
    }

    .item:nth-of-type(even) {
        background-color: blue;
    }
</style>

<snap-view class="snap-view" id="test_container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</snap-view>

<script src="/assets/scripts/lab.js"></script>