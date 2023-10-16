import { CustomComponent, customComponent } from '@sagemodeninja/custom-component';

@customComponent('account-card')
export class AccountCard extends CustomComponent {
    static styles = `
        :host {
            background-color: #141719;
            border-radius: 18px;
            color: #fff;
            cursor: pointer;
            display: block;
            font-family: 'Manrope', sans-serif;
            padding: 16px 24px;
        }

        .control {
            align-items: center;
            display: flex;
            justify-content: space-between;
        }

        .title {
            display: block;
            font-size: 15px;
            font-weight: 700;
        }

        .subtitle {
            color: rgb(255 255 255 / 0.75);
            display: block;
            font-size: 14px;
            font-weight: 500;
        }

        .balance {
            color: #5fdf85;
            display: block;
            font-size: 28px;
            font-weight: 700;
        }
    `

    public render() {
        return `
            <div class="control">
                <div style="flex-grow: 1;">
                    <span class="title">Main Wallet</span>
                    <span class="subtitle">Cash</span>
                </div>
                <span class="balance">PHP 1,502,23.03</span>
            <div>
        `
    }
}