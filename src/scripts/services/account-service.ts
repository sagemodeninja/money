import { service, ServiceBase } from './service-base'
import { Account } from '@/entities'
import { ResponsePayload } from '@/classes/response-payload'
import { AccountType } from '@/enums'

@service('/api/account')
export class AccountService extends ServiceBase {
    async getAll() {
        const endpoint = this.endpoint('get.php')
        const {data} = await this._connection.get(endpoint)
        return data as Account[]
    }

    async getForType(type: AccountType) {
        const endpoint = this.endpoint('get_for_type.php')
        const {data} = await this._connection.get(
            endpoint,
            {params:{type}}
        )
        return data as Account[]
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

    // TODO: Use JSON
    async close(id: bigint) {
        const endpoint = this.endpoint('close.php');
        const data = new FormData();

        data.append('Id', id.toString());

        const {data: payload} = await this._connection.post(endpoint, data);
        return payload as ResponsePayload<string>;
    }

    // TODO: Use JSON
    async remove(id: bigint) {
        const endpoint = this.endpoint('delete.php');
        const data = new FormData();

        data.append('Id', id.toString());

        const {data: payload} = await this._connection.post(endpoint, data);
        return payload as ResponsePayload<string>;
    }
}