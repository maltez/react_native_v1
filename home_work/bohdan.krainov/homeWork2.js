randWaitTime = () => {
    return Math.floor(Math.random()*1000);
}

function fakeAPI (msg, delay){
    return new Promise((resolve, reject)=>{
        if(delay > 7) {
            return new RangeError('Its too long')
        }
        setTimeout(()=> {
            return resolve(msg);
        }, delay);
    });
}

for(let i=0; i<7; i++) {
    console.log(randWaitTime());
}
