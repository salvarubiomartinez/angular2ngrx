
export interface User{
    name: string,
    age: number,
    comments: string,
    gender: Gender
}

export enum Gender {
    Male = 1,
    Female,    
}

export interface Model {
    usersList: User[],
    userDetails: User,
    error: string,
    log: string
}