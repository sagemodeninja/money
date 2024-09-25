import { customComponent, CustomComponent, queryAll } from '@sagemodeninja/custom-component'

// TODO: Think of another name for this panel
@customComponent('transaction-panel')
export class TransactionPanel extends CustomComponent {
    @queryAll('.action-button')
    private readonly _actionBtns: HTMLButtonElement[]

    public render() {
        return `
            <button class="action-button" data-action="0">Deposit</button>
            <button class="action-button" data-action="1">Withdraw</button>
            <button class="action-button" data-action="2">Transfer</button>
            <slot></slot>
        `
    }

    public connectedCallback() {
        this.addEventListeners()
    }

    private addEventListeners() {
        this._actionBtns.forEach(btn => btn.onclick = this.onActionClick.bind(this))
    }

    private onActionClick(e: MouseEvent) {
        const action = (e.target as HTMLButtonElement).dataset.action
        this.dispatchEvent(new CustomEvent('action', {detail: parseInt(action)}))
    }
}