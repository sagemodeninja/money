import { CustomComponent, customComponent } from '@sagemodeninja/custom-component';

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

        .snapButton:disabled {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            opacity: 0.8;
        }

        .snapButton:disabled svg path {
            fill: #888;
        }
        
        @media only screen and (min-width: 768px) {
            .snapButton {
                display: flex;
            }
        }
    `
    private readonly _snapEvent: Event;

    private _index: number = 0;

    private _container: HTMLDivElement;
    private _leftBtn: HTMLButtonElement;
    private _rightBtn: HTMLButtonElement;

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

    get leftBtn() {
        this._leftBtn ??= this.shadowRoot.querySelector('.left');
        return this._leftBtn;
    }
    
    get rightBtn() {
        this._rightBtn ??= this.shadowRoot.querySelector('.right');
        return this._rightBtn;
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
        `
    }

    connectedCallback() {
        this.addEventListeners();
    }

    private addEventListeners() {
        this.container.addEventListener('scrollend', () => {
            const {scrollLeft: left} = this.container;
            const {width} = this.container.getBoundingClientRect();

            this._index = Math.round(left / width);

            this.leftBtn.disabled = this._index <= 0;

            this.dispatchEvent(this._snapEvent);
        });

        this.rightBtn.addEventListener('click', () => {
            this.snap(SnapDirection.Right);
        });

        this.leftBtn.addEventListener('click', () => {
            this.snap(SnapDirection.Left);
        });
    }

    private snap(direction: SnapDirection) {
        const {width} = this.container.getBoundingClientRect();

        this.container.scrollTo({
            left: (this._index + direction) * width,
            behavior: 'smooth'
        })
    }
}