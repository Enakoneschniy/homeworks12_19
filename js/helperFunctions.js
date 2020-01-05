export function isEven(a) {
    return a % 2 === 0
}

export function randomArray(N = 10) {
    const resArray = [];
    for (let i = 0; i < N; i++) {
        resArray.push(Math.round(Math.random() * 100))
    }
    return resArray;
}

export function randomInteger(min, max) {
    let rnd = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rnd);
}

export function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

export function ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1, string.length);
}

export function sequence(start = 0, step = 1) {
    start -= step;
    return function () {
        return start += step;
    }
}

export function take(fn, x) {
    let array = [];
    for (let i = 0; i < x; i++) {
        array[i] = fn();
    }
    return array;
}

export function map(fn, array) {
    let createArray = [];
    let checkLength = array.length;
    for (let i = 0; i < checkLength; i++) {
        createArray[i] = fn(array[i]);
    }
    return createArray;
}

export function square(s) {
    return s * s;
}