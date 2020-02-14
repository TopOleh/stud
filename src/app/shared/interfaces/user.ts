export interface User {
    id: number;
    firstName: string;
    lastName: string;
}

export class NewUser implements User {
    constructor(public id: number, public firstName: string, public lastName: string) {}
}
