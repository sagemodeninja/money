function addClass(target) {
    var tokens = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        tokens[_i - 1] = arguments[_i];
    }
    tokens.forEach(function (token) {
        target.classList.add(token);
    });
}
function removeClass(target, token) {
    target.classList.remove(token);
}
function hasClass(target, token) {
    return target.classList.contains(token);
}
function enable(input, enable) {
    if (enable || enable === undefined) {
        input.removeAttribute("disabled");
    }
    else {
        input.setAttribute("disabled", "");
    }
}
function disable(input) {
    enable(input, false);
}
function attr(target, name, value) {
    if (value) {
        target.setAttribute(name, value);
        return target;
    }
    else {
        return target.getAttribute(name);
    }
}
function name(input, name) {
    return attr(input, "name", name);
}
function data(target, name, value) {
    return attr(target, "data-".concat(name), value);
}
function element(element) {
    return document.createElement(element);
}
function html(target, html) {
    if (html) {
        target.innerHTML = html;
        return target;
    }
    else {
        return target.innerHTML;
    }
}
function append(parent, child) {
    parent.appendChild(child);
}
function empty(target) {
    target.innerHTML = "";
    target.innerText = "";
}
function value(input, value) {
    if (value !== undefined) {
        input.value = value;
        return input;
    }
    else {
        value = input.value;
        if (data(input, "type") === "number" || attr(input, "type") === "number") {
            return value !== "" ? value : "0";
        }
        else {
            return value;
        }
    }
}
function intValue(input) {
    return parseInt(value(input));
}
function floatValue(input) {
    return parseFloat(value(input));
}
function option(select, val, text) {
    var opt = element("option");
    value(opt, val);
    html(opt, text);
    append(select, opt);
    return opt;
}
// Written by Gary Antier 2020
// This script provides utility for simplifying common JavaScript syntaxes.
// This works similar to jQuery although not as powerful.
// Adapted/consolidated from Syntax.js (RAFO - non OOP) and framework.js (RAFO - OOP, multi purpose script).
// Current version 0.5.0.6
var Syntax = /** @class */ (function () {
    function Syntax(self) {
        this.self = self;
        this.nodes = [this];
    }
    // HTML...
    Syntax.query = function (selector, parent) {
        var node;
        var isString = typeof selector === "string";
        node = isString ? parent.querySelectorAll(selector) : selector;
        return syn.wrap(node);
    };
    Syntax.wrap = function (nodes) {
        var syntax;
        if (nodes instanceof NodeList) {
            var length_1 = nodes.length;
            if (length_1 === 0)
                return null;
            syntax = new Syntax(nodes[0]);
            for (var idx = 1; idx < length_1; idx++) {
                var node = new Syntax(nodes[idx]);
                syntax.nodes.push(node);
            }
        }
        else {
            syntax = new Syntax(nodes);
        }
        return syntax;
    };
    Syntax.create = function (element) {
        // TODO: Improve, implement document based creation.
        var node = document.createElement(element);
        return syn.wrap(node);
    };
    Syntax.prototype.query = function (selector) {
        return syn.query(selector, this.self);
    };
    Syntax.prototype.html = function (content) {
        if (content !== undefined) {
            this.self.innerHTML = content;
            return this;
        }
        else {
            return this.self.innerHTML;
        }
    };
    Syntax.prototype.text = function (content) {
        if (content !== undefined) {
            this.self.innerText = content;
            return this;
        }
        else {
            return this.self.innerText;
        }
    };
    Syntax.prototype.empty = function () {
        this.html(null);
        this.text(null);
        return this;
    };
    Object.defineProperty(Syntax.prototype, "parentNode", {
        get: function () {
            return this.self.parentNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Syntax.prototype, "parent", {
        get: function () {
            return syn.wrap(this.parentNode);
        },
        enumerable: false,
        configurable: true
    });
    Syntax.prototype.append = function (childSyntax, returnChild) {
        this.self.appendChild(childSyntax.self);
        return returnChild ? childSyntax : this;
    };
    Syntax.prototype.insert = function (siblingSyntax, sisterSyntax) {
        this.parentNode.insertBefore(siblingSyntax.self, sisterSyntax);
    };
    Syntax.prototype.insertBefore = function (siblingSyntax, returnSibling) {
        this.insert(siblingSyntax, this.self);
        return returnSibling ? siblingSyntax : this;
    };
    Syntax.prototype.insertAfter = function (siblingSyntax, returnSibling) {
        this.insert(siblingSyntax, this.self.nextSibling);
        return returnSibling ? siblingSyntax : this;
    };
    Syntax.remove = function (syntax) {
        syntax.parentNode.removeChild(syntax.self);
        syntax = undefined;
    };
    // Attributes...
    Syntax.prototype.attr = function (name, value) {
        if (value !== undefined) {
            this.self.setAttribute(name, value);
            return this;
        }
        else {
            return this.self.getAttribute(name);
        }
    };
    Syntax.prototype.removeAttr = function (name) {
        this.self.removeAttribute(name);
        return this;
    };
    Syntax.prototype.data = function (name, value) {
        return this.attr("data-".concat(name), value);
    };
    Object.defineProperty(Syntax.prototype, "nodeName", {
        get: function () {
            return this.self.nodeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Syntax.prototype, "bounds", {
        get: function () {
            return this.self.getBoundingClientRect();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Syntax.prototype, "boundsHeight", {
        get: function () {
            return this.bounds.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Syntax.prototype, "boundsWidth", {
        get: function () {
            return this.bounds.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Syntax.prototype, "boundsTop", {
        get: function () {
            return this.bounds.top;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Syntax.prototype, "boundsRight", {
        get: function () {
            return this.bounds.right;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Syntax.prototype, "boundsBottom", {
        get: function () {
            return this.bounds.bottom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Syntax.prototype, "boundsLeft", {
        get: function () {
            return this.bounds.left;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Syntax.prototype, "offHeight", {
        get: function () {
            return this.self.offsetHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Syntax.prototype, "offWidth", {
        get: function () {
            return this.self.offsetWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Syntax.prototype, "class", {
        // Class...
        get: function () {
            return this.self.classList;
        },
        enumerable: false,
        configurable: true
    });
    Syntax.prototype.hasClass = function (token) {
        return this.class.contains(token);
    };
    Syntax.prototype.addClass = function () {
        var _this = this;
        var tokens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tokens[_i] = arguments[_i];
        }
        tokens.forEach(function (_class) {
            _this.class.add(_class);
        });
        return this;
    };
    Syntax.prototype.removeClass = function (token) {
        this.class.remove(token);
        return this;
    };
    // Input...
    Syntax.prototype.type = function (token) {
        return this.attr("type", token);
    };
    Syntax.prototype.name = function (name) {
        return this.attr("name", name);
    };
    Syntax.prototype.enable = function (enable) {
        if (enable !== null && enable !== void 0 ? enable : true) {
            this.removeAttr("disabled");
        }
        else {
            this.attr("disabled", "");
        }
        return this;
    };
    Syntax.prototype.disable = function () {
        this.enable(false);
        return this;
    };
    Object.defineProperty(Syntax.prototype, "value", {
        get: function () {
            return this.self.value;
        },
        set: function (value) {
            this.self.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Syntax.prototype.val = function (value) {
        if (value !== undefined) {
            this.value = value;
            return this;
        }
        else {
            value = this.value;
            if (this.attr("type") === "number" && value == "")
                value = "0";
            return value;
        }
    };
    Syntax.prototype.addOption = function (value, text) {
        var option = syn.create("option");
        option.val(value).text(text);
        this.append(option);
        return this;
    };
    Object.defineProperty(Syntax.prototype, "checked", {
        get: function () {
            return this.self.checked;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Syntax.prototype, "files", {
        get: function () {
            return this.self.files;
        },
        enumerable: false,
        configurable: true
    });
    // Styles...
    Syntax.prototype.css = function (styles) {
        var style = this.self.style;
        // Height...
        style.height = styles.height;
        style.maxHeight = styles.maxHeight;
        style.minHeight = styles.maxHeight;
        // Width...
        style.width = styles.width;
        style.maxWidth = styles.maxWidth;
        style.minWidth = styles.minWidth;
        // Margins..
        style.marginTop = styles.marginTop;
        style.marginRight = styles.marginRight;
        style.marginBottom = styles.marginBottom;
        style.marginLeft = styles.marginLeft;
        // Overflow...
        style.overflowY = styles.overflowY;
        return this;
    };
    // Events...
    Syntax.prototype.on = function (event, callback) {
        this.self.addEventListener(event, callback);
    };
    Syntax.ready = function (callback) {
        document.addEventListener("DOMContentLoaded", callback.bind(document));
    };
    Syntax.prototype.click = function (callback) {
        this.on("click", callback);
    };
    Syntax.prototype.input = function (callback) {
        this.on("input", callback);
    };
    Syntax.prototype.change = function (callback) {
        this.on("change", callback);
    };
    // Tables...
    Syntax.prototype.addRow = function () {
        var row = syn.create("tr");
        this.append(row);
        return row;
    };
    Syntax.prototype.addColumn = function (html) {
        var col = syn.create("td");
        this.append(col);
        if (html !== undefined)
            col.append(html);
        return col;
    };
    // CORE Specs
    Syntax.prototype.addContext = function (context, data) {
        this.self.addContext(context, data);
    };
    return Syntax;
}());
this.syn = {
    document: Syntax.wrap(document),
    body: Syntax.wrap(document.body),
    ready: function (callback) { return Syntax.ready(callback); },
    query: function (selector, parent) {
        if (parent === void 0) { parent = document; }
        return Syntax.query(selector, parent);
    },
    wrap: function (node, parent) {
        if (parent === void 0) { parent = document; }
        return Syntax.wrap(node, parent);
    },
    create: function (element) { return Syntax.create(element); },
    remove: function (syntax) { return Syntax.remove(syntax); }
};
