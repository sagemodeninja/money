import { EntityStatus } from '@/enums';

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