const x = 1;
const y = 'str';

const obj = {x, y};

const obj1 = {
    name: 'Fernando',
    heyZorro() { // === heyZorro: function()
        console.log(`Hey ${this.name}`);
    },
    1 : 'Hey'
}

const hey = obj1.heyZorro;
hey()
obj1.heyZorro(); 

const zorroWifeNumber = 3;
const zorro = {
    ['wife'+ zorroWifeNumber]: 'Esmiralda'
}

console.log(zorro.wife3);