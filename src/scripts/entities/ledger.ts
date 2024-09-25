import { LedgerStatus, RecordType } from '@/enums'
import { LedgerLine } from './ledger-line'

export interface Ledger {
    id: number
    user_id: number
    record_date: string
    record_type: RecordType
    description: string
    lines: LedgerLine[]
    status: LedgerStatus
}