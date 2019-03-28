randWaitTime = () => {
    return Math.floor(Math.random()*1000);
}

test_urls = ['http://testurl1.com', 'http://testurl2.com', 'http://testurl3.com']

function fakeAPI (msg, delay){
    return new Promise((resolve, reject)=>{
        if(msg.includes('error')) {
            return reject(new Error(`Parameter "${msg}" contains error`))
        }
        setTimeout(()=> {
            return resolve({'message':msg, 'time': delay});
        }, delay);
    });
}

fakeAPI('first', 300)
    .then(result => {
        console.log(result);
        return fakeAPI("with error", 500);
    })
    .catch((error) => {
        console.log(error);
    })


promises = [];

for(let i=0; i<7; i++) {
    let time = randWaitTime();
    promises.push(fakeAPI(`param${i}`, time));
}

final_requests = [];

Promise.all(promises)
    .then(dataArray => {
        console.log("Result of all Promises:");
        console.log(dataArray);
        const values = [];
        for(q of dataArray){
            values.push(`q=${q.message}`);
        }
        for(url of test_urls) {
            final_requests.push(fakeAPI(url + '/?' + values.join('&'), randWaitTime()))
        }
        return final_requests;
    })
    .then((data) => {
        result = Promise.race(data);
        return result
    })
    .then((data) => {
        console.log('Fastest response:', data)
    })
    .catch((err) => {
        console.log(err.message);
    });
