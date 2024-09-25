import { AccountType, EntityStatus } from '@/enums'

export interface Account {
    id: number
    user_id: number
    name: string
    type: AccountType
    status: EntityStatus
}