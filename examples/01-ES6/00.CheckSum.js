let x = 12;

if(true) {
    let x = 100500;
}

console.log(x);

for(let i = 0; i < 5; i++) {
    setTimeout(function(){
        console.log(i);
    }, 5);
}

const a = {z: 12};
a.z = 42;

const fn = function() {
    return 'Hello world';
}

const str1 = 'str1';
const str2 = 'str2';
const str3 = 'str3';

const res = `${str1} ${str2} ${str3} ${3+3}`;
console.log(res);

const zorro = 'Zorro';
const obj = {
    zorro,
    fight() {
        console.log(`${this.zorro} fight!!!`);
    }
}

console.log(obj)
obj.fight()



const obj1 = {
    a: 12,
    b: 42,
    fn(){
        console.log('First behavior ');
    }
};

const obj2 = {
    fn(){
        console.log('Second behavior ');
        super.fn();
    } 
}

obj2.__proto__ = obj1;

obj2.fn();

const zz = Math.floor(Math.random()* 100);

var obj3 = {
    ['this is calculated property' + zz]: zz,
    1: 'One',
    true: 'TRUE!!!'
}

console.log(obj3);

const obj4 = {
    [Symbol()]: '42',
    ab: 12
}

// for(let key in obj4) {
//     console.log(key);
// }

console.log( Object.getOwnPropertySymbols(obj4));