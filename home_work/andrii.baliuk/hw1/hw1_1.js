class IterableObject {
    constructor() {
        this.a = 1;
        this.b = 2;
        this.c = 3;
        this.d = 4;
        this.array = [1,2,3,4,5,6];
    }

    [Symbol.iterator]() {
        const propertyNames = Object.getOwnPropertyNames(this);
        let __counter__ = 0;
        return {
            next: function() {
                if (__counter__ < propertyNames.length) {
                    const value = propertyNames[__counter__];
                    __counter__ += 1;
                    return { value, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

const objectWithIterator = new IterableObject();

for (let key of objectWithIterator) {
    console.log(key);
}
