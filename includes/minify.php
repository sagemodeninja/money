<?php
use MatthiasMullie\Minify;

$cssMinifier = new Minify\CSS();
$jsMinifier = new Minify\JS();

// CSS
$styles = array(
    "dashboard.css",
    "transaction.css"
);
foreach($styles as $style) {
    $cssMinifier->add("assets/styles/" . $style);
}

// JS
$scripts = array(
    "js/alpha_blend.js",
    "js/DateTime.js",
    "js/ContextMenu.js",
    "AccountCard.js",
    "transaction_panel.js",
    "js/enums.js",
    "js/objects.js",
    "js/transaction.js",
    "js/dashboard.js"
);
foreach ($scripts as $script) {
    $jsMinifier->add("assets/scripts/" . $script);
}

// save minified file to disk
$cssMinifier->minify("assets/minified/styles/dashboard.min.css");
$jsMinifier->minify("assets/minified/scripts/dashboard.min.js");
?>