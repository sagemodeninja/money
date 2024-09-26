import { LedgerService } from '@/services'
import { customComponent, CustomComponent, query, queryAll } from '@sagemodeninja/custom-component'
import { WalletCard } from './wallet-card'
import styles from './transaction-view.component.scss'

// TODO: Think of another name for this panel
@customComponent('transaction-view')
export class TransactionView extends CustomComponent {
    static styles = styles.toString()

    private readonly _ledgerService: LedgerService

    @query('.control')
    private _control: HTMLDialogElement

    @query('.card')
    private _card: WalletCard

    @queryAll('.action-button')
    private _actionBtns: HTMLButtonElement[]

    @query('.ledger-list')
    private _ledgerList: HTMLDivElement

    private _id: number

    constructor() {
        super()
        this._ledgerService = new LedgerService()
    }

    public render() {
        return `
            <dialog class="control">
                <div>
                   <wallet-card class="card"></wallet-card> 
                </div>
                <div class="actions">
                    <button class="action-button" data-action="0">Deposit</button>
                    <button class="action-button" data-action="2">Transfer</button>
                </div>
                <div class="ledger-list"></div>
            </dialog>
        `
    }

    public connectedCallback() {
        this.addEventListeners()
    }

    public async open(id: number) {
        this._id = id
        this._card.name = 'Hello World!'
        this._control.showModal()
        await this.refreshLedgers()
    }

    public clear() {
        this._id = undefined
        this._control.close()
    }

    private addEventListeners() {
        this._actionBtns.forEach(btn => btn.onclick = this.onActionClick.bind(this))
    }

    private onActionClick(e: MouseEvent) {
        const action = (e.target as HTMLButtonElement).dataset.action
        this.dispatchEvent(new CustomEvent('action', {detail: parseInt(action)}))
    }

    private async refreshLedgers() {
        const ledgers = await this._ledgerService.getForWallet(this._id)
        const items = ledgers.map(l => {
            const item = document.createElement('div')
            item.innerHTML = `
                <span>${l.description}</span>
                <span>${l.record_date}</span>
            `
            return item
        })
        this._ledgerList.replaceChildren(...items)
    }
}