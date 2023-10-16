import { CustomComponent, customComponent } from '@sagemodeninja/custom-component';

@customComponent('page-indicator')
export class PageIndicator extends CustomComponent {
    static styles = `
        .control {
            display: flex;
            gap: 5px;
            justify-content: center;
        }

        .indicator {
            background-color: rgba(0 0 0 / 0.4);
            background-color: rgba(0 0 0 / 0.2);
            border-radius: 4px;
            display: block;
            height: 7px;
            transition: width 0.25s;
            transition-timing-function: ease;
            width: 7px;
        }

        .indicator.active {
            background-color: #4fb96f;
            width: 30px;
        }
    `

    static get observedAttributes() {
        return ['size', 'active-index'];
    }

    private readonly _indicators: HTMLSpanElement[] = [];

    private _size: number = 0;
    private _activeIndex: number;

    private _control: HTMLDivElement;

    /* Attributes */
    set size(value: number) {
        this.updateSize(value);
    }

    set activeIndex(value: number) {
        this.updateActiveIndex(value);
    }

    /* DOM */
    get control() {
        this._control ??= this.shadowRoot.querySelector('.control');
        return this._control;
    }

    public render() {
        return `<div class="control" part="control"></div>`
    }

    attributeChangedCallback(name: string, _, newValue: any) {
        switch(name) {
            case 'size':
                this.updateSize(parseInt(newValue));
                break;
            case 'active-index':
                this.updateActiveIndex(parseInt(newValue));
                break;
        }
    }

    private updateSize(newValue: number) {
        const delta = newValue - this._size;

        if (delta === 0) return;

        const added = Array.from({ length: delta }, () => {
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            return indicator;
        });

        const removed = this._indicators.splice(delta, Math.abs(delta), ...added);

        this.control.append(...added);
        removed.forEach(indicator => indicator.remove());

        this._size = newValue;
        this.setAttribute('size', newValue.toString());
    }

    private updateActiveIndex(newIndex: number) {
        if (this._activeIndex === newIndex) return;

        this._indicators[this._activeIndex]?.classList.remove('active');
        this._indicators[newIndex].classList.add('active');

        this._activeIndex = newIndex;
        this.setAttribute('active-index', newIndex.toString());
    }
}