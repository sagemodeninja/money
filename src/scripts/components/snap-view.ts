import '@/components/page-indicator';
import { CustomComponent, customComponent } from '@sagemodeninja/custom-component';
import { PageIndicator } from '@/components/page-indicator';

enum SnapDirection {
    Left = -1,
    Right = 1
}

@customComponent('snap-view')
export class SnapView extends CustomComponent {
    static styles = `
        :host {
            display: block;
            position: relative;
        }

        .container {
            -ms-overflow-style: none;
            display: flex;
            height: 100%;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
        }

        .container::-webkit-scrollbar {
            display: none;
        }

        .snapButton {
            align-items: center;
            background: #fff;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 50px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            display: none;
            height: 24px;
            justify-content: center;
            padding: 4px;
            position: absolute;
            top: calc(50% - (24px / 2));
            width: 24px;
        }

        .snapButton.left {
            left: 12px;
        }

        .snapButton.right {
            right: 12px;
        }

        .snapButton:active {
            height: 22px;
            margin: 1px;
            width: 22px;
        }

        .snapButton:not(:active) {
            transition: all 0.25s;
        }

        .indicator {
            bottom: 16px;
            position: absolute;
            width: 100%;
        }
        
        @media only screen and (min-width: 768px) {
            :host(:hover) .snapButton:not(:disabled) {
                display: flex;
            }
        }
    `
    private readonly _snapEvent: Event;

    private _index: number = 0;
    private _panelCount: number = 0;

    private _container: HTMLDivElement;
    private _slot: HTMLSlotElement;
    private _leftBtn: HTMLButtonElement;
    private _rightBtn: HTMLButtonElement;
    private _indicator: PageIndicator;

    constructor() {
        super();
        this._snapEvent = new Event('snap');
    }

    get activeIndex() {
        return this._index;
    }

    /* DOM */
    get container() {
        this._container ??= this.shadowRoot.querySelector('.container');
        return this._container;
    }

    get defaultSlot() {
        this._slot ??= this.shadowRoot.querySelector('slot');
        return this._slot;
    }

    get leftBtn() {
        this._leftBtn ??= this.shadowRoot.querySelector('.left');
        return this._leftBtn;
    }
    
    get rightBtn() {
        this._rightBtn ??= this.shadowRoot.querySelector('.right');
        return this._rightBtn;
    }
    
    get indicator() {
        this._indicator ??= this.shadowRoot.querySelector('.indicator');
        return this._indicator;
    }

    public render() {
        return `
            <div class="container">
                <slot></slot>
            </div>
            <button class="snapButton left" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M0.29 12.71l8 8 1.41-1.41-6.29-6.29H24v-2H3.41l6.29-6.29-1.41-1.41-8 8a1 1 0 0 0 0 1.41z" data-name="Arrow Left"/>
                </svg>
            </button>
            <button class="snapButton right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M23.71 11.29l-8-8-1.41 1.41 6.29 6.29H0v2h20.59l-6.29 6.29 1.41 1.41 8-8a1 1 0 0 0 0-1.41z" data-name="Arrow Right"/>
                </svg>          
            </button>
            <page-indicator class="indicator" part="indicator"></page-indicator>
        `
    }

    connectedCallback() {
        this.addEventListeners();
    }

    private addEventListeners() {
        this.defaultSlot.addEventListener('slotchange', () => {
            const {length} = this.defaultSlot.assignedElements();

            this._panelCount = length - 1;
            this.indicator.size = length;
            this.indicator.activeIndex = 0;
        });

        this.rightBtn.addEventListener('click', () => {
            this.snap(SnapDirection.Right);
        });

        this.leftBtn.addEventListener('click', () => {
            this.snap(SnapDirection.Left);
        });

        this.container.addEventListener('scroll', () => {
            const index = this.resolveIndex();

            if (this._index === index) return;

            this._index = index;
            this.leftBtn.disabled = index <= 0;
            this.rightBtn.disabled = index === this._panelCount;
            this.indicator.activeIndex = index;
            this.dispatchEvent(this._snapEvent);
        });
    }

    private resolveIndex() {
        const {scrollLeft: left} = this.container;
        const {width} = this.container.getBoundingClientRect();

        return Math.round(left / width);
    }

    private snap(direction: SnapDirection) {
        const {width} = this.container.getBoundingClientRect();

        this.container.scrollTo({
            left: (this._index + direction) * width,
            behavior: 'smooth'
        })
    }
}

@customComponent('snap-view-panel')
export class SnapViewPanel extends CustomComponent {
    static styles = `
        :host {
            flex-shrink: 0;
            scroll-snap-align: center;
            scroll-snap-stop: always;
            width: 100%;
        }
    `

    public render() {
        return `<slot></slot>`
    }
}