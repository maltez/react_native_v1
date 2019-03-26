randWaitTime = () => {
    return Math.floor(Math.random()*1000);
}

test_url_1 = 'http://testurl1.com';
test_url_2 = 'http://testurl2.com';
test_url_3 = 'http://testurl3.com'

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

function updateURL(url, key, values) {
    result = url + '/?'
    for (i of values) {
        result += `${key}=${i}`
    }
    return result
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
        console.log("Result of all Promises");
        console.log(dataArray);
        for(i of dataArray) {
            console.log(i.message);
        }
        return dataArray;
    })
    .catch((err) => {
        console.log(err.message);
    });
