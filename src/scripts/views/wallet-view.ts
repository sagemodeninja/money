import '@/components'
import { WalletService } from '@/services'
import { WalletForm } from '@/classes/forms'
import { WalletCard } from '@/components'
import { Wallet } from '@/entities'

class WalletView {
    private readonly _service: WalletService
    private readonly _grid: HTMLDivElement
    private readonly _refreshBtn: HTMLButtonElement
    private readonly _createBtn: HTMLButtonElement
    private readonly _form: WalletForm

    constructor() {
        this._service = new WalletService()
        this._grid = document.getElementById('wallet-grid') as HTMLDivElement
        this._refreshBtn = document.querySelector('#refresh_button')
        this._createBtn = document.querySelector('#create_button')
        this._form = new WalletForm(this._service)

        this.addEventListener()
    }

    public async refresh() {
        const wallets = await this._service.get()
        const cards = wallets.map(w => this.createCard(w))
        this._grid.replaceChildren(...cards)
    }

    private addEventListener() {
        this._refreshBtn.onclick = this.refresh.bind(this)
        this._createBtn.onclick = async () => {
            await this._form.open()
        }
    }

    private createCard(wallet: Wallet) {
        const card = document.createElement('wallet-card') as WalletCard
        card.name = wallet.name
        card.onclick = async () => this._form.open(wallet)
        return card
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const view = new WalletView()
    await view.refresh()
})