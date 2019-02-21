class A {
    constructor (){
        this.a = 12;
    }

    sayHello(){
        console.log(this.a);
        console.log('Say hello');
    }
}

export default A;