function filter(fn, array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            newArray.push(array[i]);
        }
    }
return newArray;
}

function isEven(x) {
    return x % 2 === 0;
}

console.log(filter(isEven, [5,7,8,9,10,22,33,44,55,667,890]))