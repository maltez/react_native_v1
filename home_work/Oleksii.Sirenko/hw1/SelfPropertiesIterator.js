class SelfPropertiesIterator {
    constructor() {
        this.a = 12;
        this.b = 13;
        this.c = 14;
    }

    [Symbol.iterator]() {
        const __propertyNames__ = Object.getOwnPropertyNames(this);
        let __counter__ = 0;

        return {
            next: () => ({ done: __counter__ >= __propertyNames__.length, value: __propertyNames__[__counter__++] })
        };
    }
}

const iterator = new SelfPropertiesIterator();

for (let property of iterator) {
    console.log(`The ${iterator[property]} is a value of property "${property}".`);
}
