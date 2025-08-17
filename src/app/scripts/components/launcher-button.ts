import { html, unsafeCSS, LitElement } from "lit";
import { component } from "@/decorators";
import styles from "./launcher-button.component.scss";

@component("launcher-button")
export class LauncherButton extends LitElement {
    static styles = unsafeCSS(styles);

    public render() {
        return html`
            <button>
                <slot name="icon"></slot>
            </button>
            <span id="label">
                <slot></slot>
            </span>
        `;
    }
}
