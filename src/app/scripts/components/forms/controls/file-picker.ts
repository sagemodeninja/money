import { html, unsafeCSS, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { component } from "@/decorators";
import { FileHandler, OpenDialogProperties } from "@/utilities/file-handler";
import styles from "./file-picker.component.scss";

@component("file-picker")
export class FilePicker extends LitElement {
    static styles = unsafeCSS(styles);

    @property()
    public value: string;

    public render() {
        return html`
            <input type="text" value="${this.value}" readonly />
            <button id="browse-button" @click=${this.browse}>
                <svg class="icon" part="icon" stroke-linejoin="round" viewBox="0 0 16 16">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z">
                    </path>
                </svg>
            </button>
        `
    }

    protected properties(): OpenDialogProperties {
        return ["openFile"];
    }

    private async browse() {
        const result = await FileHandler.showOpenDialog({
            title: this.title,
            message: this.title,
            defaultPath: FileHandler.getRecentDirectory(this.id) ?? undefined,
            properties: this.properties()
        });

        if (result.canceled) return;

        this.value = result.filePaths[0];
        FileHandler.setRecentDirectory(this.id, this.value);
    }
}