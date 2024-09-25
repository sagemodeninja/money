
import { service, ServiceBase } from './service-base'
import { Ledger } from '@/entities'

@service('/api/ledger')
export class LedgerService extends ServiceBase {
    async getForWallet(id: number) {
        const endpoint = this.endpoint('wallet.php')
        const {data} = await this._connection.get(endpoint, {params:{id}})
        return data as Ledger[]
    }

    async getForAccount() {
        const endpoint = this.endpoint('account.php')
        const {data} = await this._connection.get(endpoint)
        return data as Ledger[]
    }

    async create(data: Partial<Ledger>) {
        const endpoint = this.endpoint('post.php')
        const {data: payload} = await this._connection.post(endpoint, data)
        return payload as Ledger
    }
}