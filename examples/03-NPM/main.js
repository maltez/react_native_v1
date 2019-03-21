const { floor, random } = Math;

class A {
    constructor() {
        this.__id = floor(random() * 100500);
    }
}

module.exports = new A();