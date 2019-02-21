// 500 ms -> hello
// 200 ms -> how are you
// 300 ms -> you are handsome
// 400 ms -> thank you
// 200 ms -> good bye 

const delay = function(ms, message) {
    return new Promise((resolve, reject)=> {
        if(ms > 5000) {
            return reject(new RangeError('Wrong timeout range'));
        }

        setTimeout(() => {
            return resolve(message.toUpperCase());
        }, ms);
    });
}

const asyncDelay = async function () {
    let result = await delay(500, 'Hello');
    console.log(result);
    result = await delay(500, 'how are you');
    console.log(result);
    result = await delay(500, 'you are handsome');
    console.log(result);
    result = await delay(500, 'thank you');
    console.log(result);
    result = await delay(500, 'good bye');
    console.log(result);

    try{
        await delay(5001, 'thank you');
    } catch (err) {
        console.log(err.message);
    }
    return 'THIS IS THE END';
}

asyncDelay()
    .then((data) => {
        console.log(data);
    });


const iWannaPromise = function(stub) {
    console.log(stub);
    if(stub === 'error') {
        return Promise.reject('Error');
    }
    return Promise.resolve(stub);
}

iWannaPromise('error')
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    }); 

Promise.race([
    delay(5001, 'how are you'),
    delay(300, 'you are handsome'),
    delay(400, 'thank you')])
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    });

delay(500, 'Hello')
    .then(data => {
        console.log(data);
        return delay(200, 'how are you');
    })
    .then((data) => {
        console.log(data);
        return delay(300, 'you are handsome');
    })
    .then((data) => {
        console.log(data);
        return delay(400, 'thank you');
    })
    .then((data) => {
        console.log(data);
        return delay(200, 'good bye');
    })
    .then((data) => {
        console.log(data);
        return 'THIS IS THE END'
    })
    .then(data => {
        return data;
    })
    .catch(err => {
        return `Handle unexpected error ${err}`;
    })
    .then(data => {
        console.log(data.toLocaleUpperCase());
    });





const goodByeCb = () => {
    console.log('Good bye.');
}

const thankCb = () => {
    console.log('Thank you!!!!!');
    setTimeout(goodByeCb, 200);
}

const awesomeCb = () => {
    console.log('You are handsome!!!');
    setTimeout(thankCb, 400);
}

const howAreYouCb = () => {
    console.log('How are you?');
    setTimeout(awesomeCb, 300);
}

const greetingCb = () => {
    console.log('Hello');
    setTimeout(howAreYouCb, 200);
}

setTimeout(greetingCb,500);