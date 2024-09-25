import { FormDialog } from '@/components'
import { Ledger, LedgerLine } from '@/entities'
import { RecordType } from '@/enums'
import { AccountService, LedgerLineService, LedgerService } from '@/services'

export class LedgerForm {
    private readonly _service: LedgerService
    private readonly _lineService: LedgerLineService
    private readonly _accountService: AccountService
    
    private readonly _dialog: FormDialog
    private readonly _dateIpt: HTMLInputElement
    private readonly _descriptionIpt: HTMLInputElement
    private readonly _accountSelect: HTMLSelectElement
    private readonly _amountIpt: HTMLInputElement
    private readonly _submitBtn: HTMLButtonElement

    private _walletId: number
    private _recordType: number
    private _ledger: Partial<Ledger>
    private _line: Partial<LedgerLine>

    constructor(selector: string) {
        this._service = new LedgerService()
        this._lineService = new LedgerLineService()
        this._accountService = new AccountService()

        this._dialog = document.querySelector(selector)
        this._dateIpt = this._dialog.querySelector('input[name=record_date]')
        this._descriptionIpt = this._dialog.querySelector('input[name=description]')
        this._accountSelect = this._dialog.querySelector('select[name=account_id]')
        this._amountIpt = this._dialog.querySelector('input[name=amount]')
        this._submitBtn = this._dialog.querySelector('#submit_button')

        this.addEventListeners()
    }

    public async open(walletId: number, recordType: RecordType, ledger?: Partial<Ledger>) {
        this._walletId = walletId
        this._recordType = recordType
        this._ledger = ledger ?? {}
        this._line = {}

        await this.setAccountOptions()

        this._dialog.show()
    }

    private addEventListeners() {
        this._dateIpt.oninput = this.onInput.bind(this)
        this._descriptionIpt.oninput = this.onInput.bind(this)
        this._accountSelect.onchange = this.onInput.bind(this)
        this._amountIpt.oninput = this.onInput.bind(this)
        this._submitBtn.onclick = this.save.bind(this)
    }

    private async setAccountOptions() {
        const accounts = await this._accountService.getAll()
        const options = accounts.map(a => {
            const option = document.createElement('option')
            option.value = a.id.toString()
            option.innerText = a.name
            return option
        })
        this._accountSelect.replaceChildren(...options)
    }

    private onInput() {
        this._ledger.record_date = this._dateIpt.value
        this._ledger.record_type = this._recordType
        this._ledger.description = this._descriptionIpt.value

        this._line = {
            wallet_id: this._walletId,
            account_id: parseInt(this._accountSelect.value),
            description: this._descriptionIpt.value,
            debit: parseFloat(this._amountIpt.value),
            credit: 0
        }
    }

    private async save() {
        const ledger = await this._service.create(this._ledger)
        const tasks = [this._line].map(l => this._lineService.create({...l, ledger_id: ledger.id}))
        await Promise.all(tasks)
    }
}