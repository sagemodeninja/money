import { EntityStatus } from '@/enums/entity-status';

export interface Account {
    Id: bigint;
    Shortcode: string;
    Title: string;
    CategoryId: bigint;
    Category: string;
    CategoryColor: string;
    CategoryOrder: number;
    AccountNumber: string;
    BankIcon: string;
    Status: EntityStatus
}