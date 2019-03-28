const obj = {
    a : 1,
    b: 100500,
    fn() {
        return this.a + this.b;
    }
}

const fn = obj.fn;
console.log(fn());
setTimeout(() => {
    console.log(obj.fn());
}, 200);
// console.log(obj.fn());