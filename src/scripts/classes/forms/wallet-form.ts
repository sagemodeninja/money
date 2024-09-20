import { FormDialog } from '@/components'
import { User } from '@/entities/user'
import { UserService, WalletService } from '@/services'

export class WalletForm {
    private readonly _service: WalletService
    private readonly _userService: UserService

    private readonly _form: FormDialog
    private readonly _userSelect: HTMLSelectElement
    private readonly _nameInput: HTMLInputElement
    private readonly _submitBtn: HTMLButtonElement

    constructor(service: WalletService) {
        this._service = service
        this._userService = new UserService()

        this._form = document.querySelector('#form')
        this._userSelect = document.querySelector('select[name=user_id]')
        this._nameInput = document.querySelector('input[name=name]')
        this._submitBtn = document.querySelector('#submit_button')

        this.addEventListener()
    }

    public async open() {
        await this.setUserOptions()
        this._form.show()
    }

    private addEventListener() {
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

    private async save() {
        const userId = parseInt(this._userSelect.value)
        const name = this._nameInput.value
        await this._service.create({
            user_id: userId,
            name: name
        })
    }
}