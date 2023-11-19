import { ResponsePayload } from '@/classes';
import { User } from '@/entities';
import { service, ServiceBase } from './service-base';

@service('/user/crud')
export class UserService extends ServiceBase {
    async get() {
        const endpoint = this.endpoint('read.php');
        const {data} = await this._connection.get(endpoint);

        return data as ResponsePayload<User[]>;
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
        const data = new FormData();

        data.append('Id', id.toString());

        const {data: payload} = await this._connection.post(endpoint, data);
        return payload as ResponsePayload<string>;
    }
}