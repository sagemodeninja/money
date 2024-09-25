
import { service, ServiceBase } from './service-base'
import { Ledger } from '@/entities'

@service('/api/ledger')
export class LedgerService extends ServiceBase {
    async get() {
        const endpoint = this.endpoint('get.php')
        const {data} = await this._connection.get(endpoint)
        return data as Ledger[]
    }
}