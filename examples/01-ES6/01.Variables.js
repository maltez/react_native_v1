let str = 'string variable';
str = 'other string';
if(true) {
    let str = 'another string';
}
// let str = 1; - Error
console.log(str);

// Temporary dead zone
console.log(zorro);
let zorro = 'Hey zorro';


for(let i = 0; i < 5; i += 1) {
    setTimeout(function() {
        console.log(i);
    }, 10)
}

a = 1;
var b = function() {
    var a = 2;
    return function() {
        a = 3;
    }
}

console.log(a);
var c = b();
console.log(a);
c();
console.log(a);

'use strict'
window.zz = 2;
console.log(zz);

const c1 = 1;
const c2 = {};
c2.ad = 12;
