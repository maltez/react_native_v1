class MyItertor {
    constructor() {
        this.a = 1;
        this.b = 2;
        this.c = 3;
    }
    [Symbol.iterator]() {
        return {
            __counter__: 0,
            propertyNames: Object.getOwnPropertyNames(new MyItertor()),
            next() {     
                    if(this.__counter__ < this.propertyNames.length) {
                        const value = this.propertyNames[this.__counter__];
                        this.__counter__ += 1;
                        return { value, done: false };
                    } else {
                        return { done: true };
                    }
            }
        }
    }
}

const iterator = new MyItertor();
iterator[Symbol.iterator]();

for(let key in iterator) {
    console.log(key);
}

console.log('=======================');

for(let key of iterator) {
    console.log(key);
}
