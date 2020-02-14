export interface Course {
    id: string;
    topRated: boolean;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
}

export class NewCourse implements Course {
    constructor(
        public id: string,
        public topRated: boolean,
        public title: string,
        public creationDate: string,
        public duration: number,
        public description: string) {}
}
