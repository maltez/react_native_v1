class FakeApi {
    constructor(minMs = 500, maxMs = 5000) {
        this.minMsTimeout = minMs;
        this.maxMsTimeout = maxMs;
        this.firstBaseUri = "http://first-uri";
        this.secondBaseUri = "http://second-uri";
        this.thirdBaseUri = "http://third-uri";
    }

    getRandomTimeout() {
        const divider = 100;
        return (
            Math.floor((Math.random() * (this.maxMsTimeout - this.minMsTimeout) + this.minMsTimeout) / divider) *
            divider
        );
    }

    getUriParts(data) {
        return new Promise((resolve, reject) => {
            if (data.match("error")) {
                return reject(new RangeError("Parameter contains error"));
            } else {
                const timeout = this.getRandomTimeout();
                setTimeout(() => {
                    return resolve(data);
                }, timeout);
            }
        });
    }

    getParameters() {
        const numberOfParameters = 7;
        const promises = [];
        for (let i = 0; i < numberOfParameters; i++) {
            promises.push(this.getUriParts(`parameter=${i}`));
        }
        return Promise.all(promises);
    }

    getApiEndPoint(parameters) {
        return this.getUriParts(`my-api?${parameters}`);
    }

    getFinalResult(apiEndPoint) {
        return Promise.race([
            this.getUriParts(`${this.firstBaseUri}/${apiEndPoint}`),
            this.getUriParts(`${this.secondBaseUri}/${apiEndPoint}`),
            this.getUriParts(`${this.thirdBaseUri}/${apiEndPoint}`)
        ]);
    }
}

const main = (async function() {
    try {
        const api = new FakeApi();
        const parameters = await api.getParameters();
        console.log(parameters);
        const apiEndPoint = await api.getApiEndPoint(parameters.join("&"));
        console.log(apiEndPoint);
        const result = await api.getFinalResult(apiEndPoint);
        console.log(result);
    } catch (error) {
        console.log(`Error occured: ${error.message}`);
    }
})();
