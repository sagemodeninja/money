import { service, ServiceBase } from './service-base'
import { Wallet } from '@/entities'

@service('/api/wallet')
export class WalletService extends ServiceBase {
    async get() {
        const endpoint = this.endpoint('get.php')
        const {data} = await this._connection.get(endpoint)
        return data as Wallet[]
    }

    async create(data: Partial<Wallet>) {
        const endpoint = this.endpoint('post.php')
        const {data: payload} = await this._connection.post(endpoint, data)
        return payload as Wallet
    }

    async update(id: number, data: Partial<Wallet>) {
        const endpoint = this.endpoint(`patch.php?id=${id}`)
        const {data: payload} = await this._connection.patch(endpoint, data)
        return payload as Wallet
    }

    async remove(id: number) {
        const endpoint = this.endpoint(`delete.php?id=${id}`)
        await this._connection.delete(endpoint);
    }
}