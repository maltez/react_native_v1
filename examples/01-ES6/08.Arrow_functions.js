(function(){
    const fn1 = function() {
        privateFn();
    };
    const privateFn = function() {}
    return {
        fn1,
    }
})()


