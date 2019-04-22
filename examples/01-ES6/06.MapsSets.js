const arr = [1, 'str', true, 2, 'fff', {}, null, 3, 4, 6.6];

const arr1 = arr
    .filter((item, index)=> {
        return typeof item === 'number';
    })
    .reduce((acc, item) => {
        return acc += item;
    }, 0)

console.log(arr1)

const map = new Map();
map.set({}, 1);
map.set(1, 'str');
console.log(map.size)
console.log(map.get(1));
for(key of map) {
    console.log(key);
}