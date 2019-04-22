class IteratorClass {
    constructor() {
        this.firstName = 123;
        this.secondName = 234;
        this.thirdName = 456;
    }

    [Symbol.iterator]() {
        const propertyNames = Object.keys(this);

        return {
            __counter__: 0,
            next() {

                if (this.__counter__ < propertyNames.length) {
                    const value = propertyNames[this.__counter__];
                    this.__counter__ += 1;
                    return {
                        value,
                        done: false
                    };
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
};

const newClass = new IteratorClass();
for (let key of newClass) {
    console.log(key);
}