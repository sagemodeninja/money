import { CustomComponent, customComponent } from '@sagemodeninja/custom-component';

@customComponent('account-card')
export class AccountCard extends CustomComponent {
    static styles = `
        :host {
            background-color: #040507;
            border-radius: 16px;
            color: #fff;
            display: block;
            font-family: 'Manrope', sans-serif;
            padding: 16px 24px;
        }

        .control {
            display: flex;
        }

        .title {
            display: block;
            font-size: 15px;
            font-weight: 700;
        }

        .subtitle {
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: rgb(255 255 255 / 0.75);
        }
    `

    public render() {
        return `
            <div class="control">
                <div>
                    <span class="title">Main Wallet</span>
                    <span class="subtitle">Cash</span>
                </div>
            <div>
        `
    }
}