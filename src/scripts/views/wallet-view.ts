import {WalletService} from '@/services'
import { customComponent, CustomComponent, property, query } from '@sagemodeninja/custom-component'

@customComponent('wallet-card')
class WalletCard extends CustomComponent {
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

class WalletView {
    private readonly _service: WalletService
    private readonly _grid: HTMLDivElement

    constructor() {
        this._service = new WalletService()
        this._grid = document.getElementById('wallet-grid') as HTMLDivElement
    }

    public async refresh() {
        const wallets = await this._service.get()
        const cards = wallets.map(w => {
            const card = document.createElement('wallet-card') as WalletCard
            card.name = w.name
            return card
        })
        this._grid.replaceChildren(...cards)
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const view = new WalletView()
    await view.refresh()
})