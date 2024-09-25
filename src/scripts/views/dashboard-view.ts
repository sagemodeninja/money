import '@/components'
import { LedgerService, WalletService } from '@/services'
import { WalletCard, TransactionPanel } from '@/components'
import { LedgerForm } from '@/classes/forms'
import { RecordType } from '@/enums'

class DashboardView {
    private readonly _walletService: WalletService
    private readonly _ledgerService: LedgerService

    private readonly _body: HTMLDivElement
    private readonly _transactionPnl: TransactionPanel
    private readonly _form: LedgerForm

    private _walletId: number

//     private refreshCommand: FluentAppBarButton;
//     private toggleCommand: FluentAppBarButton;
//     private transactionPanel: TransactionPanel;

//     private contextMenu: ContextMenu;

//     private transaction: TransactionManager;
//     private isShowClosed: boolean;
//     private closedAccounts: any[];

    constructor() {
        this._walletService = new WalletService()
        this._ledgerService = new LedgerService()

        this._body = document.querySelector('#wallet_body')
        this._transactionPnl = document.querySelector('#transaction_panel')
        this._form = new LedgerForm('#ledger_form')

//         this.refreshCommand = document.querySelector('#refresh_command');
//         this.toggleCommand = document.querySelector('#toggle_closed_command');
//         this.transactionPanel = document.querySelector('#transaction_panel');

//         this.transaction = new TransactionManager();
//         this.closedAccounts = [];

//         this.transaction.card = document.querySelector("#transaction_card");
//         this.transaction.actions = document.querySelectorAll("action-button");
//         this.transaction.container = document.querySelector(".transaction-container");
//         this.transaction.editor = document.querySelector("#editor_dialog");

//         this.initContextMenu();
        this.addEventListeners()
    }

    public async refresh() {
        await this.refreshWallets();
    }

//     private initContextMenu() {
//         this.contextMenu = globalContext.addMenu('accounts_card', this.body);

//         // Context menu options...
//         const closeOption = new ContextMenuOption('Close');
//         const deleteOption = new ContextMenuOption('Delete');
        
//         closeOption.visible(d => d.Status === 'Active');
//         deleteOption.visible(d => d.Status === 'Active');
        
//         closeOption.onClick(async acct => {
//             const response = confirm(`Close account \"${acct.Title}\"?`);
            
//             if(!response) return;

//             const service = new AccountService();
//             const payload = await service.close(acct.Id);

//             if (!payload.state) {
//                 alert(payload.content);
//                 return;
//             }

//             // TODO: Fix this!
//             // refreshCategories();
//         });
        
//         deleteOption.onClick(async acct => {
//             const response = confirm(`Delete account \"${acct.Title}\"?`);
            
//             if(!response) return;
            
//             const service = new AccountService();
//             const payload = await service.remove(acct.Id);

//             if (!payload.state) {
//                 alert(payload.content);
//                 return;
//             }

//             // TODO: Fix this!
//             // refreshCategories();
//         });
        
//         this.contextMenu.addOptions(closeOption, deleteOption);
//     }

    private addEventListeners() {
        this._transactionPnl.addEventListener('action', async (e: CustomEvent) => {
            await this._form.open(this._walletId, e.detail)
        })
        // this.refreshCommand?.addEventListener('click', this.refreshAccounts.bind(this));
        // this.toggleCommand?.addEventListener('click', this.onToggleClick.bind(this));
    }

    private async refreshWallets() {
        const wallets = await this._walletService.get()
        const cards = wallets.map(w => {
            const card = document.createElement('wallet-card') as WalletCard
            card.name = w.name
            card.onclick = () => this.refreshWalletLedgers(w.id)
            return card
        })
        this._body.replaceChildren(...cards)
    }

    private async refreshWalletLedgers(id: number) {
        const ledgers = await this._ledgerService.getForWallet(id)
        console.log(ledgers)
        this._walletId = id
    }
    
// refreshAccounts() {
//         this.body.innerHTML = '<p style="text-align: center;">Fetching Accounts...</p>';
    
//         axios.get("account/crud/read_categorized.php")
//              .then(response => {
//                 this.body.innerHTML = null;
    
//                 let accounts = response.data;
//                 if(accounts.state){
//                     let content = accounts.content;
                    
//                     let categories = content.reduce((arr, acct) => {
//                         let categoryId = acct.CategoryId;
                        
//                         if(!arr.some(cat => cat.Id == acct.CategoryId))
//                             arr.push({
//                                 Id: categoryId,
//                                 Title: acct.Category,
//                                 Color: acct.CategoryColor
//                             });
                            
//                         return arr;
//                     }, []);
//                     let categorized = content.reduce((map, acct) => map.set(acct.CategoryId, [...map.get(acct.CategoryId) ?? [], acct]), new Map());
//                     this.refreshBalances(categories, categorized);
//                 } else {
//                     this.body.innerHTML = `<p class="centered">Oops! ${accounts.content}</p>`;
//                 }
//              })
//              .catch(error => {
//                  console.dir(error);
//              });
// }
    
//     refreshBalances(categories, categorized) {
//         categorized.forEach((accounts, _category) => {
//             let category = categories.find(cat => cat.Id == _category) ?? {};
//             let color = category?.Color ?? "9E9E9E";
//             let title = category?.Title ?? "Uncategorized";
    
//             const container = document.createElement('div');
//             const accountsGrid = document.createElement('div')
//             const tag = document.createElement('fluent-symbol-icon')
//             const label = document.createElement('span')
            
//             container.classList.add('category');
//             accountsGrid.classList.add('accounts-grid');
//             tag.setAttribute('symbol', 'Tag');
//             tag.setAttribute('foreground', `#${color}`);
//             tag.setAttribute('font-size', '13');
//             tag.classList.add('tag');
//             label.classList.add('title');
            
//             this.body.appendChild(container);
//             this.body.appendChild(accountsGrid);
    
//             container.append(tag);
//             container.append(label);
    
//             accounts.forEach(account => {
//                 const card = this.newCard(account, title);
//                 accountsGrid.append(card);
//             });
//         });
//     }
    
//     newCard(account, category) {
//         let accountNumber = account.AccountNumber?.slice(-4) ?? "••••";
//         let bankIcon = account.BankIcon;
    
//         const card = document.createElement('account-card') as AccountCard;
//         const runningBalance = document.createElement('card-balance');
//         const projectedBalance = document.createElement('card-balance');
//         const accountBankIcon = document.createElement('img');
        
//         runningBalance.innerText = '...';
//         projectedBalance.innerText = '...';
//         accountBankIcon.classList.add('account-bank-icon');
//         accountBankIcon.slot = 'icon';
    
//         card.append(runningBalance);
//         card.append(projectedBalance);
//         card.append(accountBankIcon);
    
//         card.title = account.Title;
//         card.number = accountNumber;
//         card.category = category;
        
//         runningBalance.title = 'Actual';
//         projectedBalance.title = 'Projection';
    
//         if(bankIcon != null)
//         {
//             accountBankIcon.src =`assets/images/bank_icons/${bankIcon}.svg`;
            
//             if(bankIcon == "master_card")
//                 accountBankIcon.setAttribute('style', "bottom:16px;height:35px;");
//             if(bankIcon == "ubp" || bankIcon == "gcash")
//                 accountBankIcon.setAttribute('style', "bottom:20px;height:30px;right:25px;");
//             if(bankIcon == "cimb")
//                 accountBankIcon.setAttribute('style', "bottom:20px;height:28px;right:25px;");
//         }
      
//         // Context menu...
//         (card as any).addContext(this.contextMenu, account);
      
//         // Visibility...
//         if(account.Status !== 'Active') {
//             this.closedAccounts.push(card);
//             card.style.display = 'none';
//         }
    
//         axios.get(`/account/balance.php?accountId=${account.Id}`)
//             .then(response => {
//                 const payload = response.data as ResponsePayload<any>;

//                 if(payload.state) {
//                     let balances = payload.content;
//                     runningBalance.innerText = toCurrency(balances.Balance);
//                     projectedBalance.innerText = toCurrency(balances.Projection);
//                 } else {
//                     runningBalance.innerText = '!';
//                     projectedBalance.innerText = '!';
    
//                     console.error(payload.content);
//                 }
//             });
        
//         card.addEventListener('click', () => {
//             this.transactionPanel.show();
//             this.transaction.loadAccount(account);
//         });
    
//         return card;
//     }

//     private onToggleClick() {
//         console.log('1');
//         this.toggleCommand.icon = this.isShowClosed ? 'View' : 'Hide';
//         this.toggleCommand.label = this.isShowClosed ? 'Show Closed Accounts' : 'Hide Closed Accounts';
        
//         this.closedAccounts.forEach(card => {
//             if(this.isShowClosed)
//               card.hide();
//             else
//               card.show();
//         });

//         this.isShowClosed = !this.isShowClosed;
//     }
}

document.addEventListener('DOMContentLoaded', async () => {
    const view = new DashboardView()
    await view.refresh()
})