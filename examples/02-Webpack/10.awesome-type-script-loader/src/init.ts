interface IUser{
    name: string,
    age: number,
    isActive: boolean;
}

class User implements IUser{
    public name : string;
    public age : number;
    public isActive: boolean;

    constructor (name:any, age:any, isActive: any){
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }
}

const basil = new User('basil', 24, true);
const mary = new User('mary', 34, false);