function square(x) {
    return x * x;
}

function map(fn, array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++){
        newArr.push(fn(array[i]));
    }
    return newArr;
}

console.log(map(square, [1, 2, 3, 4]));