import { CustomComponent, customComponent, property, query,  } from '@sagemodeninja/custom-component';

@customComponent('page-indicator')
export class PageIndicator extends CustomComponent {
    static styles = `
        .control {
            display: flex;
            gap: 5px;
            justify-content: center;
        }

        .indicator {
            background-color: rgba(0 0 0 / 0.2);
            border-radius: 4px;
            display: block;
            height: 7px;
            transition: width 0.25s;
            transition-timing-function: ease;
            width: 7px;
        }

        .indicator.active {
            background-color: var(--fill-accent-color);
            width: 30px;
        }
    `

    private readonly _indicators: HTMLSpanElement[] = [];

    @query('.control')
    private _control: HTMLDivElement;

    @property()
    public size: number;

    @property({ attribute: 'active-index' })
    public activeIndex: number;

    public render() {
        return `<div class="control" part="control"></div>`
    }

    protected override stateHasChanged(changes: Map<string, any>) {
        for (const [key, value] of changes) {
            switch (key) {
                case 'size':
                    this.updateSize(value);
                    break;
                case 'activeIndex':
                    this.updateActiveIndex(value);
                    break;
            }
        }
    }

    private updateSize(oldValue: number) {
        const delta = this.size - (oldValue ?? 0);

        if (delta === 0) return;

        const added = Array.from({ length: delta }, () => {
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            return indicator;
        });

        const removed = this._indicators.splice(delta, Math.abs(delta), ...added);

        this._control.append(...added);
        removed.forEach(indicator => indicator.remove());
    }

    private updateActiveIndex(oldIndex: number) {
        if (this.activeIndex === oldIndex) return;

        this._indicators[oldIndex]?.classList.remove('active');
        this._indicators[this.activeIndex].classList.add('active');
    }
}