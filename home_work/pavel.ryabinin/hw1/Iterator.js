
class Iterator {
    constructor(obj) {

        this[_obj] = obj;
        this.a = 1;
        this.b = 2;
    }

    [Symbol.iterator]() {
             let i = -1;
             const obj = Object.assign({...this[_obj]}, this);
             const propertyNames = Object.getOwnPropertyNames( obj );
             return {
             next: () => ({ value: propertyNames[++i], done: !(i in propertyNames) })
            };
        };
    };

const _obj = Symbol('_obj');

// Testing Part:
const a = {'c' : 111, 'd' : 222};

const iterator = new Iterator(a);

for (let key of iterator){
    console.log(key);};
