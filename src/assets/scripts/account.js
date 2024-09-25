/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./scripts/views/account-view.ts ***!
  \***************************************/
// import useNavigation from '@/classes/navigation';
// import { Account } from '@/entities/account';
// import { Category } from '@/entities/category';
// import { Operation } from '@/enums/operation';
// import { AccountService } from '@/services/account-service';
// import { CategoryService } from '@/services/category-service';
// class AccountView {
//     private _table: HTMLTableSectionElement;
//     private _editorCont: HTMLDivElement;
//     private _editor: HTMLFormElement;
//     private _slctCategory: HTMLSelectElement;
//     private _refreshBtn: HTMLButtonElement;
//     private _createBtn: HTMLButtonElement;
//     private _saveBtn: HTMLButtonElement;
//     private _operation: Operation;
//     private _service: AccountService;
//     private _categoryService: CategoryService;
//     constructor() {
//         useNavigation();
//         this._table = document.querySelector('#table tbody');
//         this._editorCont = document.querySelector('#editor_container');
//         this._editor = document.querySelector('#editor');
//         this._slctCategory = document.querySelector('#editor #categoryId');
//         this._refreshBtn = document.querySelector('#refresh_btn');
//         this._createBtn = document.querySelector('#create_btn');
//         this._saveBtn = document.querySelector('#save_btn');
//         this._operation = Operation.Create;
//         this._service = new AccountService();
//         this._categoryService = new CategoryService();
//         this.addEventListeners();
//     }
//     public async refresh() {
//         const payload = await this._service.get();
//         this._table.innerHTML = null;
//         if (!payload.state) {
//             this._table.append(`<td colspan="4" class="centered">Oops! ${payload.content}</td>`);
//             return;
//         }
//         const content = payload.content as Account[];
//         const rows = content.map(data => {
//             const row = document.createElement('tr');
//             const columns: HTMLTableCellElement[] = [];
//             const addColumn = (text?: any) => {
//                 const column = document.createElement('td');
//                 column.innerText = text ?? '';
//                 columns.push(column);
//                 return column;
//             }
//             addColumn(data.Id);
//             addColumn(data.Shortcode);
//             addColumn(data.Title);
//             addColumn(data.Category);
//             addColumn(data.AccountNumber);
//             addColumn(data.BankIcon);
//             addColumn(data.Status);
//             // ACTIONS
//             const actions = addColumn();
//             const updateBtn = document.createElement('button');
//             const deleteBtn = document.createElement('button');
//             updateBtn.innerText = 'Update';
//             deleteBtn.innerText = 'Delete';
//             updateBtn.addEventListener('click', () => this.onUpdateClick(data));
//             deleteBtn.addEventListener('click', () => this.onDeleteClick(data.Id));
//             actions.append(updateBtn, deleteBtn);
//             row.append(...columns);
//             return row;
//         });
//         this._table.append(...rows);
//     }
//     private addEventListeners() {
//         this._refreshBtn.addEventListener('click', () => this.refresh());
//         this._createBtn.addEventListener('click', () => this.onCreateClick());
//         this._saveBtn.addEventListener('click', () => this.onSaveClick());
//     }
//     private onCreateClick() {
//         this._operation = Operation.Create;
//         this._editor
//             .querySelectorAll('input')
//             .forEach(input => {
//                 input.value = '';
//             });
//         this.refreshCategories();
//         this._editorCont.style.display = 'block';
//     }
//     private onUpdateClick(data: Account) {
//         this._operation = Operation.Update;
//         this._editor
//             .querySelectorAll('input')
//             .forEach(input => {
//                 input.value = data[input.name];
//             });
//         this.refreshCategories(data.CategoryId);
//         this._editorCont.style.display = 'block';
//     }
//     private async onDeleteClick(id: bigint) {
//         const payload = await this._service.remove(id);
//         if(!payload.state) {
//             alert(payload.content);
//             return;
//         }
//         this.refresh();
//     }
//     private async onSaveClick() {
//         const data = new FormData(this._editor);
//         const payload = this._operation === Operation.Create
//             ? await this._service.create(data)
//             : await this._service.update(data);
//         if(payload.state) this.refresh();
//         this._operation = Operation.Create;
//         this._editorCont.style.display = 'none';
//         alert(payload.content);
//     }
//     private async refreshCategories(id?: bigint) {
//         this._slctCategory.toggleAttribute('disabled', true);
//         this._slctCategory.innerHTML = `<option value="-1">Loading...</option>`;
//         const payload = await this._categoryService.get();
//         if (!payload.state) {
//             alert(payload.content);
//             return;
//         }
//         // FIXME: Redundant
//         const content = payload.content as Category[];
//         const options = content.map(category => {
//             const option = document.createElement('option');
//             option.value = category.Id.toString();
//             option.innerText = category.Title;
//             return option;
//         });
//         this._slctCategory.toggleAttribute('disabled', false);
//         this._slctCategory.innerHTML = `<option value="0">--Select--</option>`;
//         this._slctCategory.append(...options);
//         // TODO: Accept null.
//         this._slctCategory.value = id?.toString() ?? '0';
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const view = new AccountView();
//     view.refresh();
// });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3RCLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy92aWV3cy9hY2NvdW50LXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHVzZU5hdmlnYXRpb24gZnJvbSAnQC9jbGFzc2VzL25hdmlnYXRpb24nO1xyXG4vLyBpbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnQC9lbnRpdGllcy9hY2NvdW50JztcclxuLy8gaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICdAL2VudGl0aWVzL2NhdGVnb3J5JztcclxuLy8gaW1wb3J0IHsgT3BlcmF0aW9uIH0gZnJvbSAnQC9lbnVtcy9vcGVyYXRpb24nO1xyXG4vLyBpbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJ0Avc2VydmljZXMvYWNjb3VudC1zZXJ2aWNlJztcclxuLy8gaW1wb3J0IHsgQ2F0ZWdvcnlTZXJ2aWNlIH0gZnJvbSAnQC9zZXJ2aWNlcy9jYXRlZ29yeS1zZXJ2aWNlJztcclxuXHJcbi8vIGNsYXNzIEFjY291bnRWaWV3IHtcclxuLy8gICAgIHByaXZhdGUgX3RhYmxlOiBIVE1MVGFibGVTZWN0aW9uRWxlbWVudDtcclxuLy8gICAgIHByaXZhdGUgX2VkaXRvckNvbnQ6IEhUTUxEaXZFbGVtZW50O1xyXG4vLyAgICAgcHJpdmF0ZSBfZWRpdG9yOiBIVE1MRm9ybUVsZW1lbnQ7XHJcbi8vICAgICBwcml2YXRlIF9zbGN0Q2F0ZWdvcnk6IEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgXHJcbi8vICAgICBwcml2YXRlIF9yZWZyZXNoQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuLy8gICAgIHByaXZhdGUgX2NyZWF0ZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbi8vICAgICBwcml2YXRlIF9zYXZlQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbi8vICAgICBwcml2YXRlIF9vcGVyYXRpb246IE9wZXJhdGlvbjtcclxuLy8gICAgIHByaXZhdGUgX3NlcnZpY2U6IEFjY291bnRTZXJ2aWNlO1xyXG4vLyAgICAgcHJpdmF0ZSBfY2F0ZWdvcnlTZXJ2aWNlOiBDYXRlZ29yeVNlcnZpY2U7XHJcblxyXG4vLyAgICAgY29uc3RydWN0b3IoKSB7XHJcbi8vICAgICAgICAgdXNlTmF2aWdhdGlvbigpO1xyXG5cclxuLy8gICAgICAgICB0aGlzLl90YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZSB0Ym9keScpO1xyXG4vLyAgICAgICAgIHRoaXMuX2VkaXRvckNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdG9yX2NvbnRhaW5lcicpO1xyXG4vLyAgICAgICAgIHRoaXMuX2VkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0b3InKTtcclxuLy8gICAgICAgICB0aGlzLl9zbGN0Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdG9yICNjYXRlZ29yeUlkJyk7XHJcblxyXG4vLyAgICAgICAgIHRoaXMuX3JlZnJlc2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVmcmVzaF9idG4nKTtcclxuLy8gICAgICAgICB0aGlzLl9jcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlX2J0bicpO1xyXG4vLyAgICAgICAgIHRoaXMuX3NhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZV9idG4nKTtcclxuXHJcbi8vICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gT3BlcmF0aW9uLkNyZWF0ZTtcclxuLy8gICAgICAgICB0aGlzLl9zZXJ2aWNlID0gbmV3IEFjY291bnRTZXJ2aWNlKCk7XHJcbi8vICAgICAgICAgdGhpcy5fY2F0ZWdvcnlTZXJ2aWNlID0gbmV3IENhdGVnb3J5U2VydmljZSgpO1xyXG5cclxuLy8gICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcHVibGljIGFzeW5jIHJlZnJlc2goKSB7XHJcbi8vICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHRoaXMuX3NlcnZpY2UuZ2V0KCk7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgdGhpcy5fdGFibGUuaW5uZXJIVE1MID0gbnVsbDtcclxuICAgICAgICBcclxuLy8gICAgICAgICBpZiAoIXBheWxvYWQuc3RhdGUpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5fdGFibGUuYXBwZW5kKGA8dGQgY29sc3Bhbj1cIjRcIiBjbGFzcz1cImNlbnRlcmVkXCI+T29wcyEgJHtwYXlsb2FkLmNvbnRlbnR9PC90ZD5gKTtcclxuLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgICAgICBjb25zdCBjb250ZW50ID0gcGF5bG9hZC5jb250ZW50IGFzIEFjY291bnRbXTtcclxuLy8gICAgICAgICBjb25zdCByb3dzID0gY29udGVudC5tYXAoZGF0YSA9PiB7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnM6IEhUTUxUYWJsZUNlbGxFbGVtZW50W10gPSBbXTtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIGNvbnN0IGFkZENvbHVtbiA9ICh0ZXh0PzogYW55KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIGNvbHVtbi5pbm5lclRleHQgPSB0ZXh0ID8/ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtbik7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgYWRkQ29sdW1uKGRhdGEuSWQpO1xyXG4vLyAgICAgICAgICAgICBhZGRDb2x1bW4oZGF0YS5TaG9ydGNvZGUpO1xyXG4vLyAgICAgICAgICAgICBhZGRDb2x1bW4oZGF0YS5UaXRsZSk7XHJcbi8vICAgICAgICAgICAgIGFkZENvbHVtbihkYXRhLkNhdGVnb3J5KTtcclxuLy8gICAgICAgICAgICAgYWRkQ29sdW1uKGRhdGEuQWNjb3VudE51bWJlcik7XHJcbi8vICAgICAgICAgICAgIGFkZENvbHVtbihkYXRhLkJhbmtJY29uKTtcclxuLy8gICAgICAgICAgICAgYWRkQ29sdW1uKGRhdGEuU3RhdHVzKTtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIC8vIEFDVElPTlNcclxuLy8gICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IGFkZENvbHVtbigpO1xyXG4vLyAgICAgICAgICAgICBjb25zdCB1cGRhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuLy8gICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4vLyAgICAgICAgICAgICB1cGRhdGVCdG4uaW5uZXJUZXh0ID0gJ1VwZGF0ZSc7XHJcbi8vICAgICAgICAgICAgIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSAnRGVsZXRlJztcclxuXHJcbi8vICAgICAgICAgICAgIHVwZGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMub25VcGRhdGVDbGljayhkYXRhKSk7XHJcbi8vICAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMub25EZWxldGVDbGljayhkYXRhLklkKSk7XHJcblxyXG4vLyAgICAgICAgICAgICBhY3Rpb25zLmFwcGVuZCh1cGRhdGVCdG4sIGRlbGV0ZUJ0bik7XHJcbi8vICAgICAgICAgICAgIHJvdy5hcHBlbmQoLi4uY29sdW1ucyk7XHJcblxyXG4vLyAgICAgICAgICAgICByZXR1cm4gcm93O1xyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgICB0aGlzLl90YWJsZS5hcHBlbmQoLi4ucm93cyk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuLy8gICAgICAgICB0aGlzLl9yZWZyZXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xyXG4vLyAgICAgICAgIHRoaXMuX2NyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMub25DcmVhdGVDbGljaygpKTtcclxuLy8gICAgICAgICB0aGlzLl9zYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5vblNhdmVDbGljaygpKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwcml2YXRlIG9uQ3JlYXRlQ2xpY2soKSB7XHJcbi8vICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gT3BlcmF0aW9uLkNyZWF0ZTtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgdGhpcy5fZWRpdG9yXHJcbi8vICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXHJcbi8vICAgICAgICAgICAgIC5mb3JFYWNoKGlucHV0ID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgICB0aGlzLnJlZnJlc2hDYXRlZ29yaWVzKCk7XHJcbi8vICAgICAgICAgdGhpcy5fZWRpdG9yQ29udC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwcml2YXRlIG9uVXBkYXRlQ2xpY2soZGF0YTogQWNjb3VudCkge1xyXG4vLyAgICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IE9wZXJhdGlvbi5VcGRhdGU7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgIHRoaXMuX2VkaXRvclxyXG4vLyAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxyXG4vLyAgICAgICAgICAgICAuZm9yRWFjaChpbnB1dCA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGRhdGFbaW5wdXQubmFtZV07XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgICB0aGlzLnJlZnJlc2hDYXRlZ29yaWVzKGRhdGEuQ2F0ZWdvcnlJZCk7XHJcbi8vICAgICAgICAgdGhpcy5fZWRpdG9yQ29udC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwcml2YXRlIGFzeW5jIG9uRGVsZXRlQ2xpY2soaWQ6IGJpZ2ludCkge1xyXG4vLyAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCB0aGlzLl9zZXJ2aWNlLnJlbW92ZShpZCk7XHJcblxyXG4vLyAgICAgICAgIGlmKCFwYXlsb2FkLnN0YXRlKSB7XHJcbi8vICAgICAgICAgICAgIGFsZXJ0KHBheWxvYWQuY29udGVudCk7XHJcbi8vICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHByaXZhdGUgYXN5bmMgb25TYXZlQ2xpY2soKSB7XHJcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLl9lZGl0b3IpO1xyXG4vLyAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB0aGlzLl9vcGVyYXRpb24gPT09IE9wZXJhdGlvbi5DcmVhdGVcclxuLy8gICAgICAgICAgICAgPyBhd2FpdCB0aGlzLl9zZXJ2aWNlLmNyZWF0ZShkYXRhKVxyXG4vLyAgICAgICAgICAgICA6IGF3YWl0IHRoaXMuX3NlcnZpY2UudXBkYXRlKGRhdGEpO1xyXG5cclxuLy8gICAgICAgICBpZihwYXlsb2FkLnN0YXRlKSB0aGlzLnJlZnJlc2goKTtcclxuXHJcbi8vICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gT3BlcmF0aW9uLkNyZWF0ZTtcclxuLy8gICAgICAgICB0aGlzLl9lZGl0b3JDb250LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4vLyAgICAgICAgIGFsZXJ0KHBheWxvYWQuY29udGVudCk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcHJpdmF0ZSBhc3luYyByZWZyZXNoQ2F0ZWdvcmllcyhpZD86IGJpZ2ludCkge1xyXG4vLyAgICAgICAgIHRoaXMuX3NsY3RDYXRlZ29yeS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbi8vICAgICAgICAgdGhpcy5fc2xjdENhdGVnb3J5LmlubmVySFRNTCA9IGA8b3B0aW9uIHZhbHVlPVwiLTFcIj5Mb2FkaW5nLi4uPC9vcHRpb24+YDtcclxuXHJcbi8vICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHRoaXMuX2NhdGVnb3J5U2VydmljZS5nZXQoKTtcclxuXHJcbi8vICAgICAgICAgaWYgKCFwYXlsb2FkLnN0YXRlKSB7XHJcbi8vICAgICAgICAgICAgIGFsZXJ0KHBheWxvYWQuY29udGVudCk7XHJcbi8vICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC8vIEZJWE1FOiBSZWR1bmRhbnRcclxuLy8gICAgICAgICBjb25zdCBjb250ZW50ID0gcGF5bG9hZC5jb250ZW50IGFzIENhdGVnb3J5W107XHJcbi8vICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRlbnQubWFwKGNhdGVnb3J5ID0+IHtcclxuLy8gICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBjYXRlZ29yeS5JZC50b1N0cmluZygpO1xyXG4vLyAgICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gY2F0ZWdvcnkuVGl0bGU7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4vLyAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIHRoaXMuX3NsY3RDYXRlZ29yeS50b2dnbGVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4vLyAgICAgICAgIHRoaXMuX3NsY3RDYXRlZ29yeS5pbm5lckhUTUwgPSBgPG9wdGlvbiB2YWx1ZT1cIjBcIj4tLVNlbGVjdC0tPC9vcHRpb24+YDtcclxuLy8gICAgICAgICB0aGlzLl9zbGN0Q2F0ZWdvcnkuYXBwZW5kKC4uLm9wdGlvbnMpO1xyXG5cclxuLy8gICAgICAgICAvLyBUT0RPOiBBY2NlcHQgbnVsbC5cclxuLy8gICAgICAgICB0aGlzLl9zbGN0Q2F0ZWdvcnkudmFsdWUgPSBpZD8udG9TdHJpbmcoKSA/PyAnMCc7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbi8vICAgICBjb25zdCB2aWV3ID0gbmV3IEFjY291bnRWaWV3KCk7XHJcbi8vICAgICB2aWV3LnJlZnJlc2goKTtcclxuLy8gfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9