import { PersonPhone } from "./personPhone";

export interface Person {
    businessEntityID: number;
    name: string;
    phones: PersonPhone[];
}