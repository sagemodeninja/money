document.addEventListener("DOMContentLoaded", function () {
    var navigationView = document.querySelector('#navigation_view');
    navigationView.addEventListener('selectionchanged', function (e) {
        var args = e.detail.args;
        if (args.isSettingsSelected)
            return;
        window.location.href = args.selectedItem.href;
    });
});
