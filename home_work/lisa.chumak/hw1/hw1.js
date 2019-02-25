class Iterator {
    constructor() {
        this.first = 1;
        this.second = 2;
        this.third = 3;
    }

    [Symbol.iterator]() {
        const propertyNames = Object.getOwnPropertyNames(this);
        let count = 0;
        return {
            next() {
                if (count < propertyNames.length) {
                    return { value: propertyNames[count++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

const iterator = new Iterator();

for (let key of iterator) {
    console.log(key);
}

for (let key in iterator) {
    console.log(key);
}
