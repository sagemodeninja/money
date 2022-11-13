// Written by Gary Antier 2020
// Current version: 1.2.0.1
var ContextMargin = 3;
var ContextTopOffset = 7;
var ContextMenuOption = /** @class */ (function () {
    function ContextMenuOption(label) {
        this.label = label;
        this.callbacks = [];
        this.enableChallenge = function () { return true; };
        this.visibleChallenge = function () { return true; };
    }
    ContextMenuOption.prototype.onClick = function (callback) {
        this.callbacks.push(callback);
    };
    ContextMenuOption.prototype.visible = function (challenge) {
        this.visibleChallenge = challenge;
    };
    ContextMenuOption.prototype.enable = function (challenge) {
        this.enableChallenge = challenge;
    };
    ContextMenuOption.prototype.draw = function (data) {
        var _this = this;
        var option;
        var visible = this.visibleChallenge(data);
        var enable = this.enableChallenge(data);
        if (visible) {
            option = syn.create("button");
            option.text(this.label)
                .addClass("core-context-action")
                .enable(enable);
            option.click(function (e) {
                _this.callbacks.forEach(function (c) { return c(data); });
            });
        }
        return option;
    };
    return ContextMenuOption;
}());
var ContextMenu = /** @class */ (function () {
    function ContextMenu(id, root) {
        this.id = id;
        this.root = syn.wrap(root);
        this.options = [];
        this.data = [];
    }
    ContextMenu.prototype.addOption = function (option) {
        this.options.push(option);
    };
    ContextMenu.prototype.addOptions = function () {
        var _this = this;
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        options.forEach(function (o) { return _this.options.push(o); });
    };
    ContextMenu.prototype.draw = function (dataIndex) {
        var data = this.data[dataIndex];
        var options = [];
        this.options.forEach(function (o) {
            options.push(o.draw(data));
        });
        return options;
    };
    ContextMenu.prototype.addData = function (data) {
        return this.data.push(data) - 1;
    };
    ContextMenu.prototype.clearData = function () {
        this.data = [];
    };
    return ContextMenu;
}());
var ContextMenuGlobal = /** @class */ (function () {
    function ContextMenuGlobal() {
        this.element = syn.create("div");
        this.menus = {};
        this.activeTrigger;
        this.triggerTop;
        this.triggerLeft;
        this.init();
        this.initEventListeners();
    }
    ContextMenuGlobal.prototype.init = function () {
        this.element.addClass("core-context");
        syn.body.append(this.element);
        Node.prototype.addContext = function (context, data) {
            var dataIndex = context.addData(data);
            syn.wrap(this)
                .data("context-id", context.id)
                .data("index", dataIndex);
            return this;
        };
    };
    ContextMenuGlobal.prototype.initEventListeners = function () {
        var _this = this;
        syn.document.on("contextmenu", function (e) { return _this.onContext(e); });
        syn.document.click(function (e) { return _this.onClick(e); });
    };
    ContextMenuGlobal.prototype.addMenu = function (id, root) {
        var menu = new ContextMenu(id, root);
        this.menus[id] = menu;
        return menu;
    };
    ContextMenuGlobal.prototype.onContext = function (e) {
        var target;
        var isDocument = false;
        var contextId;
        var dataIndex;
        do {
            if (target) {
                target = target === null || target === void 0 ? void 0 : target.parentNode;
            }
            else {
                target = e.target;
            }
            isDocument = target === document;
            contextId = !isDocument ? target.getAttribute("data-context-id") : null;
        } while (!isDocument && !contextId);
        target = syn.wrap(target);
        dataIndex = target.data("index");
        if (contextId) {
            e.preventDefault();
            this.reset();
            this.activeTrigger = target;
            this.triggerTop = e.clientY;
            this.triggerLeft = e.clientX;
            this.show(contextId, dataIndex);
            target.addClass("active");
        }
    };
    ContextMenuGlobal.prototype.onClick = function (e) {
        if (e.target.isSameNode(this.element.self) == false) {
            this.reset();
        }
    };
    ContextMenuGlobal.prototype.show = function (contextId, dataIndex) {
        var element = this.element;
        var menu = this.menus[contextId];
        var options = menu.draw(dataIndex);
        options.forEach(function (o) {
            if (o) {
                element.append(o);
            }
        });
        // Bounds...
        var root = menu.root;
        var rootTop = root.boundsTop + ContextMargin;
        var rootRight = root.boundsRight - ContextMargin;
        var rootBottom = root.boundsBottom - ContextMargin;
        var rootLeft = root.boundsLeft + ContextMargin;
        // Contexts...
        var contextTop = this.triggerTop - ContextTopOffset;
        var contextLeft = this.triggerLeft;
        var contextBottom = contextTop + element.boundsHeight;
        var contextRight = contextLeft + element.boundsWidth;
        // X-limit bounds.
        if (contextLeft < rootLeft) {
            contextLeft = rootLeft;
        }
        else if (contextRight > rootRight) {
            contextLeft = rootRight - element.boundsWidth;
        }
        // Y-limit bounds.
        if (contextTop < rootTop) {
            contextTop = rootTop;
        }
        else if (contextBottom > rootBottom) {
            contextTop = rootBottom - element.boundsHeight;
        }
        element.addClass("active");
        element.self.style.top = "".concat(contextTop, "px");
        element.self.style.left = "".concat(contextLeft, "px");
    };
    ContextMenuGlobal.prototype.reset = function () {
        var _a;
        this.element.empty();
        this.element.removeClass("active");
        this.element.attr("style", "");
        (_a = this.activeTrigger) === null || _a === void 0 ? void 0 : _a.removeClass("active");
        this.activeTrigger = undefined;
        this.triggerTop = undefined;
        this.triggerLeft = undefined;
    };
    return ContextMenuGlobal;
}());
var globalContext = new ContextMenuGlobal();
