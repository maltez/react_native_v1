const arrObj = {
    a: 1,
    b: 42,
    fn: () => {
        console.log(`We have ${this.a} mean of life. Mean of life is ${this.b}`);
    }
}

arrObj.fn.call(arrObj);