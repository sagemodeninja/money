import "./create-wizard.scss";
import "@/components";

import { FilePicker } from "@/components";
import { CreateVaultOptions } from "@/data-objects";

class CreateWizardView {
    private readonly _nameInput: HTMLInputElement;
    private readonly _saveLocation: FilePicker;
    private readonly _passwordIpt: HTMLInputElement;
    private readonly _createBtn: HTMLButtonElement;
    private readonly _cancelBtn: HTMLButtonElement;

    constructor() {
        this._nameInput = document.getElementById('display-name-ipt') as HTMLInputElement;
        this._saveLocation = document.getElementById('save-location') as FilePicker;
        this._passwordIpt = document.getElementById('password-input') as HTMLInputElement;
        this._createBtn = document.getElementById('create-btn') as HTMLButtonElement;
        this._cancelBtn = document.getElementById('cancel-btn') as HTMLButtonElement;
        this.addEventListeners();
    }

    private addEventListeners() {
        this._createBtn.onclick = this.createVault.bind(this);
        this._cancelBtn.onclick = this.cancel.bind(this);
    }

    private createVault() {
        window.app.sendCommand("create-vault", {
            displayName: this._nameInput.value,
            saveLocation: this._saveLocation.value,
            password: this._passwordIpt.value
        } as CreateVaultOptions);
    }

    private cancel() {
        window.app.sendCommand("close-create-wizard");
    }
}

document.addEventListener("DOMContentLoaded", () => new CreateWizardView());