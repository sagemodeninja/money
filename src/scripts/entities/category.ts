import { EntityStatus } from '@/enums';

export interface Category {
    Id: bigint,
    Title: string,
    Color: string,
    Order: number;
    Status: EntityStatus;
}