class Iterable {
    constructor(arr) {
        this.arr = arr;
    }

    [Symbol.iterator]() {
        let arr = this.arr.filter((item, index)=> index % 2 === 0);
        let currentIndex = 0;
        return {
            next() {
                const value = currentIndex < arr.length ? arr[currentIndex] : 100500;
                currentIndex += 1;
                return {
                    value, done: currentIndex > arr.length
                }
            }
        }
    }
}

const iter = new Iterable([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
for(let i of iter) {
    console.log(i);
}