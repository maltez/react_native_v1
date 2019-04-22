class ClassIterator {
    constructor() {
        this.a = 12;
        this.b = 13;
        this.c = 14;
        this['12'] = 120;
    }
    [Symbol.iterator]() {
        const propertyNames = Object.getOwnPropertyNames(this);
        return {
            __counter__: 0,
            next() {
                if(this.__counter__ < propertyNames.length) {
                    const value = propertyNames[this.__counter__];
                    this.__counter__ += 1;
                    return {value, done: false};
                } else {
                    return {done: true}
                }
            }
        };
    };
};

var obj = new ClassIterator();
for(let key of obj) {
    console.log(key)
}