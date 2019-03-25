randWaitTime = () => {
    return Math.floor(Math.random()*1000);
}

function fakeAPI (msg, delay){
    return new Promise((resolve, reject)=>{
        if(msg.includes('error')) {
            return reject(new Error("Parameter contains error"))
        }
        setTimeout(()=> {
            return resolve({'message':msg, 'time': delay});
        }, delay);
    });
}

fakeAPI('first', 300)
    .then(result => {
        console.log(result, '???');
        return fakeAPI("with error", 500);
    })
    .then(result => console.log(result))
    .catch((error) => {
        console.log(error);
    })


promises = [];

for(let i=0; i<7; i++) {
    let time = randWaitTime();
    promises.push(fakeAPI(i.toString(), time));
}

Promise.all(promises)
    .then(dataArray => {
        console.log("Result of Promise.all");
        console.log(dataArray);
        return dataArray;
    })
    .catch((err) => {
        console.log('@@@');
        console.log(err.message);
    });
