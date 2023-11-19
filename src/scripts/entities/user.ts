import { EntityStatus } from '@/enums';

export interface User {
    Id: bigint;
    Firstname: string;
    Lastname: string;
    Email: string;
    Status: EntityStatus
}