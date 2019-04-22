const obj = {
    a: 1,
    f: {
        d: 1
    },
    b: {
        c: {
            d: {
                e: 4
            }
        }
    }
}

console.log(obj.a);
console.log(obj.b.c.d.e);
//let e = obj.a.b.c.d.e;
let { b: { c: { d: {e} } }, b, zorro = 'Hey zorro' } = obj;
let { a } = obj;
let { f: { d } } = obj;
console.log(d);

const arr = [1,2,3,4,5,6,7,8,0];
// const a = arr[0];
// const b = arr[1];
// const c = arr[3];
let [a, b,,c, ...d] = arr;
