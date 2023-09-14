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

        return option;
    }
}

export class ContextMenu {
    id: string;
    root: HTMLDivElement;
    options: ContextMenuOption[];
    data: any;

    constructor(id: string, root: HTMLDivElement) {
        this.id = id;
        this.root = root;
        this.options = [];
        this.data = [];
    }

    addOption(option: ContextMenuOption) {
        this.options.push(option);
    }

    addOptions(...options: ContextMenuOption[]) {
        options.forEach(option => this.options.push(option));
    }

    draw(dataIndex) {
        const data = this.data[dataIndex];
        const options = [];

        this.options.forEach(option => {
            options.push(option.draw(data));
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
    menus: {[key: string]: ContextMenu}

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

    addMenu(id: string, root: HTMLDivElement) {
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
            target.classList.add('active');
        }
    }

    onClick(e) {
        if (e.target.isSameNode(this.element) == false) {
            this.reset();
        }
    }

    show(contextId: string, dataIndex) {
        const menu = this.menus[contextId];
        const options = menu.draw(dataIndex);
        
        options.forEach(option => {
            if (option) {
                this.element.appendChild(option)
            }
        });

        // Bounds...
        const root = menu.root;
        const {left, top, right, bottom} = root.getBoundingClientRect();
        let rootTop = top + ContextMargin;
        let rootRight = right - ContextMargin;
        let rootBottom = bottom - ContextMargin;
        let rootLeft = left + ContextMargin;

        // Contexts...
        const {height, width} = this.element.getBoundingClientRect();
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

        this.element.classList.add('active');
        this.element.style.top = `${contextTop}px`;
        this.element.style.left = `${contextLeft}px`;
    }

    reset() {
        this.element.innerHTML = null;
        this.element.classList.remove('active');
        this.element.setAttribute('style', null);
        this.activeTrigger?.classList.remove('active');

        this.activeTrigger = undefined;
        this.triggerTop = undefined;
        this.triggerLeft = undefined;
    }
}

export const globalContext = new ContextMenuGlobal();