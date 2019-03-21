// Home Task Part 1

function randomWaiter() {
  const minSecs = 500;
  const maxSecs = 2000;

  let random = minSecs + Math.random() * (maxSecs + 1 - minSecs);
  return Math.floor(random);
}

const randomNumber = function() {
  const min = 0;
  const max = 100;

  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

// fake api
function fakeRestApiCall(url, body) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (body.includes("error")) {
        return reject(
          `Error happended on the server side. Url: ${url} Body: ${body}`
        );
      } else {
        return resolve({
          url,
          data: randomNumber()
        });
      }
    }, randomWaiter());
  });
}

fakeRestApiCall("http://google.com", "First step. Successful")
  .then(result => {
    console.log(result);
    return fakeRestApiCall("http://google.com", "This message contains error.");
  })
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Home Task Part 2
let promisesArray = [];
for (let i = 0; i < 7; i++) {
  promisesArray.push(
    fakeRestApiCall(
      "http://cicada3301.com",
      `Call Promise All. The number is ${i}`
    )
  );
}
Promise.all(promisesArray)
  .then(dataArray => {
    console.log("Result of Promise.all", dataArray);
    let index = 0;
    let param = "";
    for (data of dataArray) {
      param +=
        index === 0
          ? `?value${index++}=${data.data}`
          : `&value${index++}=${data.data}`;
    }
    return fakeRestApiCall("http://cicada3301.jp" + param, "Gather request");
  })
  .then(data => {
    console.log("Result after Promise.all", data);
    return Promise.race([
      fakeRestApiCall(
        "http://weather.cicada3301.1.com",
        `Call Promise Race 1. `
      ),
      fakeRestApiCall("http://weather.cicada3301.2.jp", `Call Promise Race 2.`),
      fakeRestApiCall("http://weather.cicada3301.3.net", `Call Promise Race 3.`)
    ]);
  })
  .then(data => console.log("Result of Promise.race", data))
  .catch(e => console.log("Error: " + e));
