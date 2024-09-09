const fibonacci = function (num) {
    let count;
    if (typeof num !== 'number') {
        count = parseInt(num)
    } else {
        count = num
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;
    let fibArray = [0, 1]
    for (let i = 2; i <= count; i++) {

        fibArray[i] = fibArray[i - 2] + fibArray[i - 1]
    }
    return fibArray[count]
};

// Do not edit below this line
module.exports = fibonacci;
