const objIterator = {
    a: 12,
    b: 13,
    c: 14,
    [Symbol.iterator]() {
        return {
            __counter__: 0,
            next(){
                const propertyNames = Object.getOwnPropertyNames(objIterator);

                if(this.__counter__ < propertyNames.length) {
                    const value = propertyNames[this.__counter__];
                    this.__counter__ += 1;
                    return { value, done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }
};

const iterator = objIterator[Symbol.iterator]();


for(let key of objIterator) {
    console.log(key);
}
