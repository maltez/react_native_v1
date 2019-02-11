class Theater {
    constructor(name) {
        var secretMember = 'Secret';
        this.name = name
        this.actors = 5;
        this.author = 'Shakespeare';
        this.fn = function() {
            console.log(secretMember);
        }
    }

    play() {
        console.log(`Our theater ${this.name} play by ${this.actors} play by ${this.author}`);
    }
}

class Broadway extends Theater {
    constructor(name) {
        super(name);
        this.actors = 100500;
        this.author = 'Stephen King';
    }

    play() {
        console.log('Music!!!!');
        super.play();
    }
}


const globous = new Broadway('globous');
globous.fn();
globous.play();

const arr = [1,2,3,4,5];
arr[100499] = 123;
console.log(arr);

for(let key of arr) {
    console.log(key);
}

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(var key in k) {
    console.log(key);
}