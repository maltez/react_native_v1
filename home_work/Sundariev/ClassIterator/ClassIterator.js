class Person {
    constructor(name) {
        this.name = name;
        this.age = 18;
        this.isAllowedToDrink = true;
    }
    *[Symbol.iterator]() {
        const propertyNames = Object.getOwnPropertyNames(this);
        for (let propertyName of propertyNames) {
            yield propertyName;
        }
    }
    drink(){
        if(!this.isAllowedToDrink) {
            console.log(`${this.name} is not allowed to drink!`);
            return;
        } 
        console.log(`${this.name} is drunk`);
    }
}

let annie = new Person('Annie');
annie.drink();
for (const key in annie) {
    console.log(key);
}
let annieIterator = annie[Symbol.iterator];
console.log();
for (const key of annie) {
    console.log(key);
}