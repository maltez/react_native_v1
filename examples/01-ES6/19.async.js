setTimeout(() => {
    console.log('Hello');
    setTimeout(() => {
        console.log('Hi');
        setTimeout(()=> {
            console.log('Good bye');
        }, 800);
    }, 200);
    console.log(123)
    setTimeout(()=> {
        console.log(123)
    }, 100);
}, 200);

// Plan b
setTimeout(()=> {
    console.log('Hello');
}, 200);

setTimeout(()=> {
    console.log('Hi');
}, 200);

try{
    setTimeout(()=> {
        throw new Error('Something goes wrong');
    }, 800);
} catch (e) {
    console.log(`Error - ${e.message}`)
}


const aa = function (msg) {
    if (msg.includes('error')){
        return Promise.reject();
    }

    return new Promise((res, rej) => {
        setImmediate(() => {
            res(msg);
        });
    });
}

console.log('first')
aa('hello').then((data) => {
    console.log(data);
    return aa('hi')
}).then((data) => {
    console.log(data);
    return aa('bye')
}).then((data) => {
    console.log(data);
    return aa('hi')
}).then((data) => {
    console.log(data);
    return aa('hello')
})

console.log('last')

const generator = async function (){
    console.log('first');
    try{
        console.log(await aa('error'));
    } catch (err) {
        console.log(err);
    }
    const data = await aa('bye');
    console.log(await aa('hi'));
    console.log(await aa('hello'));
    console.log(await aa('thms'));
    console.log('last');
    return 'aaaaaaaaaaaa';
}

generator().then((data) => {
    console.log(data)
})