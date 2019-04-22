const factorial = function(n) {
    if(n < 0) {
        throw new RangeError('Invalid argument range');
    }

    if (n === 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}

module.exports = factorial;