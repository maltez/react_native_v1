const map = new Map();
const obj = {};


map.set('key', 'This is the value');
map.set(obj, 'This is linked value');
map.set({}, 'This is private value');
map.set({}, 'This is another private value');
console.log(map.get('key'));
console.log(map.get(obj));
map.clear();
console.log(map.get('key'));

const arr = [1,2,obj,3,3,3,3,2,obj,1,4,5,6,7,8,9,0];
const set = new Set(arr);
console.log(...set);