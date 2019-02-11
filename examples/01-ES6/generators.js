const fn = function*() {
    let k = yield ('Hello async');
    k = yield (k + 100);
    k = yield (k+ 1000);
    yield (k + 1000);
    return;
}

const gen = fn();
console.log(gen.next());
let i = 10;

const interval = setInterval(function(){
    console.log(gen.next(i));
    i += 10;
}, 500);

setTimeout(function(){
    clearInterval(interval);
}, 4000);


