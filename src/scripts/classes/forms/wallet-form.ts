import { FormDialog } from '@/components'
import { Wallet } from '@/entities'
import { User } from '@/entities/user'
import { UserService, WalletService } from '@/services'

export class WalletForm {
    private readonly _service: WalletService
    private readonly _userService: UserService

    private readonly _form: FormDialog
    private readonly _userSelect: HTMLSelectElement
    private readonly _nameInput: HTMLInputElement
    private readonly _submitBtn: HTMLButtonElement

    private _model: Wallet
    private _isCreate: boolean

    constructor(service: WalletService) {
        this._service = service
        this._userService = new UserService()

        this._form = document.querySelector('#form')
        this._userSelect = document.querySelector('select[name=user_id]')
        this._nameInput = document.querySelector('input[name=name]')
        this._submitBtn = document.querySelector('#submit_button')

        this.addEventListener()
    }

    public async open(wallet?: Wallet) {
        this._model = {...wallet}
        this._isCreate = !wallet

        await this.setUserOptions()
        this.setValues()

        this._form.show()
    }

    private addEventListener() {
        this._userSelect.onchange = this.onInput.bind(this)
        this._nameInput.oninput = this.onInput.bind(this)
        this._submitBtn.onclick = this.save.bind(this)
    }

    private async setUserOptions() {
        const {content: users} = await this._userService.get()
        const options = (users as User[]).map(u => {
            const option = document.createElement('option')
            option.value = u.Id.toString()
            option.innerText = `${u.Firstname} ${u.Lastname}`
            return option
        })
        this._userSelect.replaceChildren(...options)
    }

    private async setValues() {
        this._userSelect.value = this._model.user_id?.toString()
        this._nameInput.value = this._model.name
    }

    private onInput() {
        this._model.user_id = parseInt(this._userSelect.value)
        this._model.name = this._nameInput.value
    }

    private async save() {
        if (this._isCreate)
            await this._service.create(this._model)
        else
            await this._service.update(this._model.id, this._model)
    }
}