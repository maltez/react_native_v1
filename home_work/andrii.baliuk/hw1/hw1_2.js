const obj = {
    a: 'one',
    b: 'two',
    c: 'three',
    array: ['a', 'b', 'c']
}

class IteratorWrapper {
    constructor(obj) {
        this.obj = obj;
    }

    [Symbol.iterator]() {
        const propertyNames = Object.getOwnPropertyNames(this.obj);
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

const iteratorWrapper = new IteratorWrapper(obj);
for (let key of iteratorWrapper) {
    console.log(key);
}