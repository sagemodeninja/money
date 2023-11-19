import { CustomComponent, customComponent } from '@sagemodeninja/custom-component';

@customComponent('account-card')
export class AccountCard extends CustomComponent {
    static styles = `
        :host {
            background-color: #151612;
            border-radius: 18px;
            color: #fff;
            cursor: pointer;
            display: block;
            font-family: 'Manrope', sans-serif;
            overflow: hidden;
            padding: 16px 24px;
            position: relative;
            user-select: none;
        }

        :host(:active) {
            box-shadow: 0 0 0 3px var(--fill-accent-color);
        }

        .control {
            align-items: center;
            display: flex;
            gap: 32px;
        }

        .details {
            flex-grow: 1;
            overflow: hidden;
        }

        .title {
            display: block;
            font-size: 15px;
            font-weight: 700;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .subtitle {
            color: rgb(255 255 255 / 0.75);
            display: block;
            font-size: 14px;
            font-weight: 500;
        }

        .balance {
            align-items: start;
            display: flex;
            flex-grow: 1;
            flex-shrink: 0;
            gap: 8px;
            justify-content: end;
        }

        .amount {
            font-family: 'JetBrains Mono', monospace;
            font-size: 21px;
            font-weight: 600;
            line-height: 0.8;
        }

        .currrency {
            color: var(--fill-accent-color-secondary);
            font-family: 'Manrope', sans-serif;
            font-size: 14px;
            font-weight: 600;
            line-height: 0.7;
        }
    `

    public render() {
        return `
            <div class="control">
                <div class="details">
                    <span class="title">A very long text that should be ellipsed</span>
                    <span class="subtitle">Cash</span>
                </div>
                <span class="balance">
                    <span class="amount">1.05K</span>
                    <span class="currrency">PHP</span>
                </span>
            </div>
        `
    }
}