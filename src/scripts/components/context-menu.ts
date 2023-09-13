// Written by Gary Antier 2020
// Current version: 1.2.0.1

const ContextMargin = 3;
const ContextTopOffset = 7;

export class ContextMenuOption {
    label: string;
    callbacks: ((data: any) => void)[];
    enableChallenge: (data: any) => boolean;
    visibleChallenge: (data: any) => boolean;

    constructor(label: string) {
        this.label = label;
        this.callbacks = [];

        this.enableChallenge = () => true;
        this.visibleChallenge = () => true;
    }

    onClick(callback) {
        this.callbacks.push(callback);
    }

    visible(challenge) {
        this.visibleChallenge = challenge;
    }

    enable(challenge) {
        this.enableChallenge = challenge;
    }

    draw(data) {
        if (!this.visibleChallenge(data)) return;

        const option = document.createElement('button');

        option.innerText = this.label;
        option.classList.add('core-context-action')
        option.disabled = !this.enableChallenge(data);

        option.addEventListener('click', () => {
            this.callbacks.forEach(callback => callback(data));
        });
    }
}

export class ContextMenu {
    id: string;
    root: HTMLElement;
    options: any[];
    data: any;

    constructor(id, root) {
        this.id = id;
        this.root = root;
        this.options = [];
        this.data = [];
    }

    addOption(option) {
        this.options.push(option);
    }

    addOptions(...options) {
        options.forEach(o => this.options.push(o));
    }

    draw(dataIndex) {
        let data = this.data[dataIndex];
        let options = [];

        this.options.forEach(o => {
            options.push( o.draw(data) );
        });

        return options;
    }

    addData(data) {
        return this.data.push(data) - 1;
    }

    clearData() {
        this.data = [];
    }
}

export class ContextMenuGlobal {
    element: HTMLDivElement;
    menus: {[key: string]: any}

    activeTrigger: any;
    triggerTop: any;
    triggerLeft: any;

    constructor() {
        this.element = document.createElement('div');
        this.menus = {};

        this.activeTrigger;
        this.triggerTop;
        this.triggerLeft;

        this.init();
        this.initEventListeners();
    }

    init() {
        this.element.classList.add('core-context');
        document.body.appendChild(this.element);

        Object.defineProperty(Node.prototype, 'addContext', { value: function(context, data) {
            const target = this as HTMLElement;
            const dataIndex = context.addData(data);

            target.dataset.contextId = context.id;
            target.dataset.index = dataIndex;

            return this;
        }});
    }

    initEventListeners() {
        document.addEventListener('contextmenu', this.onContext.bind(this));
        document.addEventListener('click', this.onClick.bind(this));
    }

    addMenu(id, root) {
        const menu = new ContextMenu(id, root);

        this.menus[id] = menu;

        return menu;
    }

    onContext(e) {
        let target;
        let isDocument = false;
        let contextId;
        let dataIndex;
        
        do
        {
            if(target) {
                target = target?.parentNode;
            } else {
                target = e.target;
            }
            
            isDocument = target === document;
            contextId = !isDocument ? target.getAttribute("data-context-id") : null;
        }
        while(!isDocument && !contextId);

        dataIndex = target.dataset.index;
        
        if(contextId) {
            e.preventDefault();

            this.reset();
            this.activeTrigger = target;
            this.triggerTop = e.clientY;
            this.triggerLeft = e.clientX;

            this.show(contextId, dataIndex);
            target.addClass("active");
        }
    }

    onClick(e) {
        if (e.target.isSameNode(this.element) == false) {
            this.reset();
        }
    }

    show(contextId, dataIndex) {
        let element = this.element;
        let menu = this.menus[contextId];

        let options = menu.draw(dataIndex);
        options.forEach(o => {
            if (o) {
                element.append(o)
            }
        });

        // Bounds...
        let root = menu.root;
        let rootTop = root.boundsTop + ContextMargin;
        let rootRight = root.boundsRight - ContextMargin;
        let rootBottom = root.boundsBottom - ContextMargin;
        let rootLeft = root.boundsLeft + ContextMargin;

        const {height, width} = element.getBoundingClientRect();

        // Contexts...
        let contextTop = this.triggerTop - ContextTopOffset;
        let contextLeft = this.triggerLeft;
        let contextBottom = contextTop + height;
        let contextRight = contextLeft + height;

        // X-limit bounds.
        if (contextLeft < rootLeft) {
            contextLeft = rootLeft;
        } else if (contextRight > rootRight) {
            contextLeft = rootRight - width;
        }

        // Y-limit bounds.
        if (contextTop < rootTop) {
            contextTop = rootTop;
        } else if (contextBottom > rootBottom) {
            contextTop = rootBottom - height;
        }

        element.classList.add('active');
        element.style.top = `${contextTop}px`;
        element.style.left = `${contextLeft}px`;
    }

    reset() {
        this.element.innerHTML = null;
        this.element.classList.remove('active');
        this.element.setAttribute('style', null);
        this.activeTrigger?.removeClass('active');

        this.activeTrigger = undefined;
        this.triggerTop = undefined;
        this.triggerLeft = undefined;
    }
}

export const globalContext = new ContextMenuGlobal();