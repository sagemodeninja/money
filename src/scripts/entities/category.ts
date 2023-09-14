import { EntityStatus } from '@/enums/entity-status';

export interface Category {
    Id: bigint,
    Title: string,
    Color: string,
    Order: number;
    Status: EntityStatus;
}