const fn = function * () {
    let i = 1;
    let z = yield (i); 
    console.log(z);
    i= 'str';
    yield;
    return i;
}

const gen = fn();
console.log(gen.next());
console.log(gen.next(12));
console.log(gen.next());

