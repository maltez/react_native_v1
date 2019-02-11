const fn = function() {
    this.meanOfLife = 42;
    return () => {
        console.log(`Mean of life is ${this.meanOfLife}`);
    }
}

const res = fn();
res();


const arrObj = {
    a: 1,
    b: 42,
    fn: () => {
        console.log(`We have ${this.a} mean of life. Mean of life is ${this.b}`);
    }
}

arrObj.fn.call(arrObj);