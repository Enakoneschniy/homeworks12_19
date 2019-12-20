function arrayFill(arrEl, arrLength) {
    const arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr.push(arrEl);
    }
    return arr;
}

console.log(arrayFill("x", 12));

