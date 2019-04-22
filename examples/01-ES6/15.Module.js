const Module =  (function() {
    const fn1 = function() {};
    const fn2 = function() {
        fn1();
    };
    const PI = 3.14;

    return {
        fn2,
        PI
    }
})()


const {fn2, PI} = Module;