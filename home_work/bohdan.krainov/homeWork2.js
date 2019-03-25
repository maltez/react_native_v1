randWaitTime = () => {
    return Math.floor(Math.random()*1000);
}

function fakeAPI (msg, delay){
    return new Promise((resolve, reject)=>{
        if(msg.includes('error')) {
            console.log('!!!');
            return new Error("Parameter contains error")
        }
        setTimeout(()=> {
            return resolve({'message':msg, 'time': delay});
        }, delay);
    });
}

promises = [];

for(let i=0; i<7; i++) {
    let time = randWaitTime();
    promises.push(fakeAPI(i.toString(), time));
}

Promise.race([fakeAPI('error', randWaitTime())])
.then((data) => {
    console.log(data);
    return data
})
.catch((err) => {
    console.log(err.message)
});


Promise.all(promises)
    .then(dataArray => {
        console.log("Result of Promise.all", dataArray);
        return dataArray;
    })
    .catch((err) => {
        console.log('@@@');
        console.log(err.message);
    });
