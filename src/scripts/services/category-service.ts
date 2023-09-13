import { ResponsePayload } from '@/classes/response-payload';
import { service, ServiceBase } from './service-base';
import { Category } from '@/entities/category';

@service('/category/crud')
export class CategoryService extends ServiceBase {
    async get() {
        const endpoint = this.endpoint('read.php');
        const {data} = await this._connection.get(endpoint);
        
        return data as ResponsePayload<Category[]>;
    }
}