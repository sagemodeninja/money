import { customComponent, CustomComponent, query } from '@sagemodeninja/custom-component'
import styles from './form-dialog.component.scss'

@customComponent('form-dialog')
export class FormDialog extends CustomComponent {
    static styles = styles.toString()

    @query('.control')
    private _control: HTMLDialogElement

    public render() {
        return `
            <dialog class="control" part="control">
                <slot></slot>
            </dialog>
        `
    }

    public show() {
        this._control.showModal()
    }

    public hide() {
        this._control.close()
    }
}