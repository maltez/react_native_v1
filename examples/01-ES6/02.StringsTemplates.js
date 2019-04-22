const greeting = 'hello people';

console.log(`Hi ${greeting}`);

const zorro = {
    name: 'Fernando',
    greeting: function() {
        return 'Hey there!!!';
    }
};

console.log(`This is ${zorro.name}. ${zorro.greeting()}`);