import { ResponsePayload } from '@/classes/response-payload';
import { service, ServiceBase } from './service-base';
import { Account } from '@/entities/account';

@service('/account/crud')
export class AccountService extends ServiceBase {
    async get() {
        const endpoint = this.endpoint('read.php');
        const {data} = await this._connection.get(endpoint);

        return data as ResponsePayload<Account[]>;
    }

    async create(data: FormData) {
        const endpoint = this.endpoint('create.php');
        const {data: payload} = await this._connection.post(endpoint, data);

        return payload as ResponsePayload<string>;
    }

    async update(data: FormData) {
        const endpoint = this.endpoint('update.php');
        const {data: payload} = await this._connection.post(endpoint, data);

        return payload as ResponsePayload<string>;
    }

    async remove(id: bigint) {
        const endpoint = this.endpoint('delete.php');
        const {data: payload} = await this._connection.post(endpoint, {id});

        return payload as ResponsePayload<string>;
    }
}