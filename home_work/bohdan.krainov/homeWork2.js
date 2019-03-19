randWaitTime = () => {
    return Math.floor(Math.random()*1000);
}

function fakeAPI (msg, delay){
    return new Promise((resolve, reject)=>{
        if(delay > 700) {
            console.log('???')
            return new RangeError('Its too long')
        }
        if(msg.includes('error')) {
            console.log('!!!!');
            return new RangeError("Parameter contains error")
        }
        setTimeout(()=> {
            return resolve(msg);
        }, delay);
    });
}

promises = [];

for(let i=0; i<7; i++) {
    let time = randWaitTime();
    console.log(time);
    promises.push(fakeAPI('Hello', time));
}

console.log(promises);

Promise.all(promises)
    .then(dataArray => {
        console.log("Result of Promise.all", dataArray);
        return dataArray;
    })
    .then(data => {
        console.log("Result after Promise.all", data);})