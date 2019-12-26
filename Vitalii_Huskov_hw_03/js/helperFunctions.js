function isEven(number) {
    return number % 2 === 0;
}

function sequence(start = 0, step = 1) {

    return function () {
        let result = start;
        for (let i = 1; i <= step; i++) {
            start++;
        }
        return result;
    }

}