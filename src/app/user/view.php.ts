import '@styles/main.scss';

import { useNavigation } from '@/classes';
import { Operation } from '@/enums';
import { User } from '@/entities';
import { UserService } from '@/services';

class UserView {
    private _table: HTMLTableSectionElement;
    private _editorCont: HTMLDivElement;
    private _editor: HTMLFormElement;

    private _refreshBtn: HTMLButtonElement;
    private _createBtn: HTMLButtonElement;
    private _saveBtn: HTMLButtonElement;

    private _operation: Operation;
    private _service: UserService;

    constructor() {
        useNavigation();

        this._table = document.querySelector('#table tbody');
        this._editorCont = document.querySelector('#editor_container');
        this._editor = document.querySelector('#editor');

        this._refreshBtn = document.querySelector('#refresh_btn');
        this._createBtn = document.querySelector('#create_btn');
        this._saveBtn = document.querySelector('#save_btn');

        this._service = new UserService();

        this.addEventListeners();
    }

    public async refresh() {
        const payload = await this._service.get();

        this._table.innerHTML = null;

        if (!payload.state) {
            this._table.append(`<td colspan="4" class="centered">Oops! ${payload.content}</td>`);
            return;
        }

        const content = payload.content as User[];
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
            addColumn(data.Firstname);
            addColumn(data.Lastname);
            addColumn(data.Email);

            // ACTIONS
            var actions = addColumn();
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
        this._saveBtn.addEventListener('click', () => this.save());
    }

    private onCreateClick() {
        this._operation = Operation.Create;
        this._editor
            .querySelectorAll('input')
            .forEach(input => input.value = '');
    
        this._editorCont.style.display = 'block';
    }

    private onUpdateClick(data: User) {
        this._operation = Operation.Update;
        this._editor
            .querySelectorAll('input')
            .forEach(input => {
                input.value = data[input.name];
            });
    
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

    private async save() {
        const data = new FormData(this._editor);
        const payload = this._operation === Operation.Create
            ? await this._service.create(data)
            : await this._service.update(data);

        if(payload.state) this.refresh();

        this._operation = Operation.Create;
        this._editorCont.style.display = 'none';

        alert(payload.content);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const view = new UserView();
    view.refresh();
});