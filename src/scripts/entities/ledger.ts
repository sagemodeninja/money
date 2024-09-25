import { LedgerStatus, RecordType } from '@/enums'

export interface Ledger {
    id: number
    record_date: string
    record_type: RecordType
    description: string
    status: LedgerStatus
}