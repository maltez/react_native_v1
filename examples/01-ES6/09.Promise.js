function sleep (msg, delay){
    return new Promise((resolve, reject)=>{
        if(delay > 7) {
            return new RangeError('Its too long')
            //return reject('Its too long');
        }
        setTimeout(()=> {
            return resolve(msg);
        }, delay * 1000);
    });
}

Promise.race([sleep('Hi', 8), sleep('Hello', 0.8), sleep('Bye', 0.3)])
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err.message)
});

Promise.resolve('data123')
    .then(data => {
        console.log(data)
    })

Promise.all([sleep('Hi', 0.7), sleep('Hello', 8), sleep('Bye', 0.3)])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err.message)
    });


sleep('Hello', 1)
    .then((data) => {
        console.log(data);
        return sleep('Hi', 2);
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((err) => {
        console.log(err.message);
        return 'Promise rejected';
    })
    .then((data) => {
        console.log(data);
    })
    