const obj1 = {a: 1};
const obj2 = {b: 2, a:4, complex: {
        c: 12
    }
};
Object.assign(obj1, obj2);

obj2.complex.c = 42;

console.log(obj1);