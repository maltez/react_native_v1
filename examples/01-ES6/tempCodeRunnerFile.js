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
    return 'THIS IS THE END'
}

asyncDelay()
    .then((data) => {
        console.log(data);
    });