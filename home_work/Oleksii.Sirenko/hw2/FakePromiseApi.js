class FakePromiseApi {
    __getResponseDelay__() {
        const TenSeconds = 10000;

        return Math.trunc(Math.random() * TenSeconds);
    }

    __convertDelayToSeconds__(delay) {
        const OneSecond = 1000;

        return Math.trunc(delay / OneSecond);
    }

    __invoke__(uri, data) {
        return new Promise((resolve, reject) => {
            const responseDelay = this.__getResponseDelay__();
            const responseDelayInSeconds = this.__convertDelayToSeconds__(responseDelay);

            setTimeout(() => {
                if (data.toLowerCase().includes("error")) {
                    reject({ uri, data, delay: responseDelayInSeconds });
                } else {
                    resolve({ uri, data, delay: responseDelayInSeconds });
                }
            }, responseDelay);
        });
    }

    firstInvoke() {
        return this.__invoke__("http://first-uri", "First data");
    }

    secondInvoke() {
        return this.__invoke__("http://second-uri", "Second data");
    }

    thirdInvoke() {
        return this.__invoke__("http://third-uri", "Third data");
    }

    fourthnvoke() {
        return this.__invoke__("http://fourth-uri", "Fourth data");
    }

    fifthInvoke() {
        return this.__invoke__("http://fifth-uri", "Fifth data");
    }

    sixthInvoke() {
        return this.__invoke__("http://sixth-uri", "Sixth data");
    }

    seventhInvoke() {
        return this.__invoke__("http://seventh-uri", "Seventh data");
    }

    aggreagatedInvoke(data) {
        return this.__invoke__("http://aggregated-uri", data);
    }

    eighthInvoke(data) {
        return this.__invoke__("http://eighth-uri", data);
    }

    ninethInvoke(data) {
        return this.__invoke__("http://nineth-uri", data);
    }

    tenthInvoke(data) {
        return this.__invoke__("http://tenth-uri", data);
    }

    errorInvoke() {
        return this.__invoke__("http://error-uri", "error");
    }
}

(async function main() {
    const api = new FakePromiseApi();

    const results = await Promise.all([
        api.firstInvoke(),
        api.secondInvoke(),
        api.thirdInvoke(),
        api.fourthnvoke(),
        api.fifthInvoke(),
        api.sixthInvoke(),
        api.seventhInvoke()
    ]);

    const aggreagatedResults = await api.aggreagatedInvoke(
        results.map(result => `The ${result.uri} returns ${result.data} and worked ${result.delay} seconds.`).join("\n")
    );

    const fastestResult = await Promise.race([
        api.eighthInvoke(aggreagatedResults.data),
        api.ninethInvoke(aggreagatedResults.data),
        api.tenthInvoke(aggreagatedResults.data)
    ]);

    console.log(
        `The fastest API is ${fastestResult.uri} (${fastestResult.delay} seconds) and contains the following result:\n${
            fastestResult.data
        }`
    );

    try {
        await api.errorInvoke();
    } catch (error) {
        console.log(`The API ${error.uri} was rejected with data is ${error.data}.`);
    }
})().then();

// **** The example of output ****
// The fastest API is http://eighth-uri (1 seconds) and contains the following result:
// The http://first-uri returns First data and worked 6 seconds.
// The http://second-uri returns Second data and worked 3 seconds.
// The http://third-uri returns Third data and worked 3 seconds.
// The http://fourth-uri returns Fourth data and worked 0 seconds.
// The http://fifth-uri returns Fifth data and worked 7 seconds.
// The http://sixth-uri returns Sixth data and worked 3 seconds.
// The http://seventh-uri returns Seventh data and worked 0 seconds.
// The API http://error-uri was rejected with data is error.
