import useNavigation from '@/classes/navigation';
import { Account } from '@/entities/account';
import { Category } from '@/entities/category';
import { Operation } from '@/enums/operation';
import { AccountService } from '@/services/account-service';
import { CategoryService } from '@/services/category-service';

class AccountView {
    private _table: HTMLTableSectionElement;
    private _editorCont: HTMLDivElement;
    private _editor: HTMLFormElement;
    private _slctCategory: HTMLSelectElement;
    
    private _refreshBtn: HTMLButtonElement;
    private _createBtn: HTMLButtonElement;
    private _saveBtn: HTMLButtonElement;

    private _operation: Operation;
    private _service: AccountService;
    private _categoryService: CategoryService;

    constructor() {
        useNavigation();

        this._table = document.querySelector('#table tbody');
        this._editorCont = document.querySelector('#editor_container');
        this._editor = document.querySelector('#editor');
        this._slctCategory = document.querySelector('#editor #categoryId');

        this._refreshBtn = document.querySelector('#refresh_btn');
        this._createBtn = document.querySelector('#create_btn');
        this._saveBtn = document.querySelector('#save_btn');

        this._operation = Operation.Create;
        this._service = new AccountService();
        this._categoryService = new CategoryService();

        this.addEventListeners();
    }

    public async refresh() {
        const payload = await this._service.get();
        
        this._table.innerHTML = null;
        
        if (!payload.state) {
            this._table.append(`<td colspan="4" class="centered">Oops! ${payload.content}</td>`);
            return;
        }
        
        const content = payload.content as Account[];
        const rows = content.map(data => {
            const row = document.createElement('tr');
            const columns: HTMLTableCellElement[] = [];
            
            const addColumn = (text?: any) => {
                const column = document.createElement('td');

                column.innerText = text ?? '';
                columns.push(column);

                return column;
            }

            addColumn(data.Id);
            addColumn(data.Shortcode);
            addColumn(data.Title);
            addColumn(data.Category);
            addColumn(data.AccountNumber);
            addColumn(data.BankIcon);
            addColumn(data.Status);
            
            // ACTIONS
            const actions = addColumn();
            const updateBtn = document.createElement('button');
            const deleteBtn = document.createElement('button');

            updateBtn.innerText = 'Update';
            deleteBtn.innerText = 'Delete';

            updateBtn.addEventListener('click', () => this.onUpdateClick(data));
            deleteBtn.addEventListener('click', () => this.onDeleteClick(data.Id));

            actions.append(updateBtn, deleteBtn);
            row.append(...columns);

            return row;
        });

        this._table.append(...rows);
    }

    private addEventListeners() {
        this._refreshBtn.addEventListener('click', () => this.refresh());
        this._createBtn.addEventListener('click', () => this.onCreateClick());
        this._saveBtn.addEventListener('click', () => this.onSaveClick());
    }

    private onCreateClick() {
        this._operation = Operation.Create;
            
        this._editor
            .querySelectorAll('input')
            .forEach(input => {
                input.value = '';
            });

        this.refreshCategories();
        this._editorCont.style.display = 'block';
    }

    private onUpdateClick(data: Account) {
        this._operation = Operation.Update;
            
        this._editor
            .querySelectorAll('input')
            .forEach(input => {
                input.value = data[input.name];
            });

        this.refreshCategories(data.CategoryId);
        this._editorCont.style.display = 'block';
    }

    private async onDeleteClick(id: bigint) {
        const payload = await this._service.remove(id);

        if(!payload.state) {
            alert(payload.content);
            return;
        }

        this.refresh();
    }

    private async onSaveClick() {
        const data = new FormData(this._editor);
        const payload = this._operation === Operation.Create
            ? await this._service.create(data)
            : await this._service.update(data);

        if(payload.state) this.refresh();

        this._operation = Operation.Create;
        this._editorCont.style.display = 'none';

        alert(payload.content);
    }

    private async refreshCategories(id?: bigint) {
        this._slctCategory.toggleAttribute('disabled', true);
        this._slctCategory.innerHTML = `<option value="-1">Loading...</option>`;

        const payload = await this._categoryService.get();

        if (!payload.state) {
            alert(payload.content);
            return;
        }

        // FIXME: Redundant
        const content = payload.content as Category[];
        const options = content.map(category => {
            const option = document.createElement('option');
            
            option.value = category.Id.toString();
            option.innerText = category.Title;
            
            return option;
        });
        
        this._slctCategory.toggleAttribute('disabled', false);
        this._slctCategory.innerHTML = `<option value="0">--Select--</option>`;
        this._slctCategory.append(...options);

        // TODO: Accept null.
        this._slctCategory.value = id?.toString() ?? '0';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const view = new AccountView();
    view.refresh();
});