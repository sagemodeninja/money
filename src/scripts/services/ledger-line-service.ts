import { service, ServiceBase } from './service-base'
import { LedgerLine } from '@/entities'

@service('/api/ledger_line')
export class LedgerLineService extends ServiceBase {
    async create(data: Partial<LedgerLine>) {
        const endpoint = this.endpoint('post.php')
        const {data: payload} = await this._connection.post(endpoint, data)
        return payload as LedgerLine
    }
}