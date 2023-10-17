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
        }

        :host(:active) {
            box-shadow: 0 0 0 3px var(--fill-accent-color);
        }

        .details {
            flex-grow: 1;
            overflow: hidden;
        }

        .control {
            align-items: center;
            display: flex;
            gap: 32px;
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

        .currrencyCode,
        .amount {
            font-family: 'JetBrains Mono', monospace;
            font-weight: 600;
            line-height: 0.8;
        }

        .currrencyCode {
            color: var(--fill-accent-color-secondary);
            font-size: 14px;
        }

        .amount {
            font-size: 21px;
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
                    <span class="amount">1,502,023.03</span>
                    <span class="currrencyCode">PHP</span>
                </span>
            </div>
        `
    }
}