var modalSpace;
var ModalSpace = /** @class */ (function () {
    function ModalSpace() {
        this.root = document.querySelector(".modal-space");
        this.stack = [];
    }
    ModalSpace.prototype.addStack = function (modal) {
        var stack = this.stack;
        var exists = stack.indexOf(modal) > -1;
        var length = stack.length;
        if (!exists) {
            stack.push(modal);
            if (length === 0) {
                addClass(this.root, "active");
            }
        }
    };
    ModalSpace.prototype.removeStack = function (modal) {
        var stack = this.stack;
        var exists = stack.indexOf(modal) > -1;
        var length = stack.length;
        if (exists) {
            stack.pop();
            if (length === 1) {
                removeClass(this.root, "active");
            }
        }
    };
    return ModalSpace;
}());
var Modal = /** @class */ (function () {
    function Modal(selector) {
        var _this = this;
        var _a;
        modalSpace = modalSpace !== null && modalSpace !== void 0 ? modalSpace : new ModalSpace();
        var root = document.getElementById(selector);
        var modal = root.querySelector(".modal-container");
        var closeActions = modal.querySelectorAll(".modal-action[data-role=close]");
        var terminable = (_a = root.getAttribute("data-terminable") === "true") !== null && _a !== void 0 ? _a : false;
        root.addEventListener("click", function (e) {
            if (terminable) {
                _this.hide();
            }
        });
        modal.addEventListener("click", function (e) { return e.stopPropagation(); });
        closeActions.forEach(function (action) {
            action.addEventListener("click", function (e) { return _this.hide(); });
        });
        this.id = selector;
        this.space = modalSpace;
        this.root = root;
        this.modal = modal;
        this.closeActions = closeActions;
    }
    Modal.prototype.show = function () {
        var root = this.root;
        var space = this.space;
        addClass(root, "active");
        root.style.zIndex = space.stack.length;
        space.addStack(this.id);
    };
    Modal.prototype.hide = function () {
        removeClass(this.root, "active");
        this.space.removeStack(this.id);
    };
    return Modal;
}());
