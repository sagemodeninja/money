<style>
    .container {
        border: solid 1px;
        display: flex;
        height: 250px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
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

<div class="container" id="test_container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>

<button id="forward">></button>
<button id="backward"><</button>

<script src="/assets/scripts/lab.js"></script>