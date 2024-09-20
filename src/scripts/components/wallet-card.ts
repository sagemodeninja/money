import { CustomComponent, customComponent, property, query } from '@sagemodeninja/custom-component'

@customComponent('wallet-card')
export class WalletCard extends CustomComponent {
    @query('.name')
    private _nameSpan: HTMLSpanElement

    @property()
    public name: string

    public render() {
        return `
            <div>
                <span class="name"></span>
                <span class="amount">P0.00</span>
            </div>
        `
    }

    public stateHasChanged(changes: Map<string, any>): void {
        if (changes.has('name'))
            this._nameSpan.innerText = this.name
    }
}