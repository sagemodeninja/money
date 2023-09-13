import { EntityStatus } from '@/enums/entity-status';

export interface User {
    Id: bigint;
    Firstname: string;
    Lastname: string;
    Email: string;
    Status: EntityStatus
}