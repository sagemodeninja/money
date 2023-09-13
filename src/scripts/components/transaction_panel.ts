import { customComponent, CustomComponent } from '@sagemodeninja/custom-component';
import * as anime from 'animejs';

@customComponent('transaction-panel')
export class TransactionPanel extends CustomComponent {
    static styles = `
        :host {
            --radius: 5px;
            --radius-mob: 15px;
            --margin: 15px;
            --top: calc(44px / 2);
            --width: 500px;
        }
        
        :host {
            background-color: rgba(0, 0, 0, 0.1);
            display: none;
            height: 100%;
            left: 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 4;
        }

        :host(.visible) {
            display: block;
        }
        
        .panel {
            background-color: #fff;
            border-top-left-radius: var(--radius-mob);
            border-top-right-radius: var(--radius-mob);
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.2), 0 calc(32 * 0.5px) calc((32 * 1px)) rgba(0, 0, 0, 0.24);
            overflow: hidden;
            position: absolute;
            right: 0;
            top: 100%;
            height: calc(100% - var(--top));
            width: 100%;
        }

        .handle-bar {
            align-items: center;
            display: flex;
            height: 20px;
            justify-content: center;
            width: 100%;
        }

        .handle-bar::before {
            background-color: rgba(194, 194, 194, 1);
            border-radius: 4px;
            content: "";
            display: block;
            height: 6px;
            width: 100px;
        }

        slot {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 15px;
            height: calc(100% - 20px);
            max-height: 100%;
            padding-top: 10px;
        }
        
        /* Tablet & Up */
        @media only screen and (min-width: 768px) {
            .panel {
                border-radius: var(--radius);
                height: calc(100% - var(--margin) * 2);
                right: calc(var(--width) * -1);
                top: var(--margin);
                width: 500px;
            }
            
            .handle-bar::before {
                display: none;
            }
        }
    `;

    private _panel: HTMLDivElement;
    private _clickedThroughPanel: boolean;
    private _overlay: any;

    constructor() {
        super();

        this._overlay = { alpha: 0.0 };
    }

    /* DOM */
    get panel() {
        this._panel ??= this.shadowRoot.querySelector(".panel");
        return this._panel;
    }

    public render() {
        return `
            <div class="panel">
                <div class="handle-bar"></div>
                <slot></slot>
            </div>
        `
    }

    connectedCallback() {
        this.addEventListener('click', this.hide);
        this.panel.addEventListener('click', () => this._clickedThroughPanel = true);
    }

    show() {
        this.classList.add('visible');
        this.transition(true, 0.1);
    }

    hide() {
        if(this._clickedThroughPanel) {
            this._clickedThroughPanel = false;
            return;
        }

        this.transition(false, 0);
    }

    transition(show: boolean, alpha: number) {
        const timeline = anime.timeline({
            duration: 300,
            easing: "easeOutQuint",
            update: () => this.changeTheme(),
            complete: () => {
                if(!show) {
                    this.classList.remove("visible");
                }
            }
        });

        // Panel
        const panelAnim: anime.AnimeAnimParams = {targets: this.panel};

        if (window.innerWidth < 768)
            panelAnim.top = show ? 22 : window.innerHeight;
        else
            panelAnim.right = show ? 15 : -531; // TODO: Dynamic?

        timeline.add(panelAnim, 0);

        // Overlay
        const background = `rgba(0, 0, 0, ${alpha})`;
        timeline.add({targets: this, background: background}, 0);

        // Theme
        // FIXME: Flicker on show first attempt.
        const overlayAnim: anime.AnimeParams = { targets: this._overlay, alpha: alpha };
        timeline.add(overlayAnim, 0);
    }

    changeTheme() {
        const theme = computeAlphaBlend(
            "f2f2f2",
            "000000", 
            this._overlay.alpha
        );

        document.querySelector('meta[name="theme-color"]')
                .setAttribute("content", theme);
    }
}