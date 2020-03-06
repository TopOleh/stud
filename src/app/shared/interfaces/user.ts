export interface User {
    email: string;
    password: string;
}

export class NewUser implements User {
    constructor(public email: string, public password: string) {}
}
