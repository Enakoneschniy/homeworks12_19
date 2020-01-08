'use strict';

//Task 01
console.log('---Task 01---');

function getNums(num, n) {
    console.log(num);
    num++;
    if (num <= n) {
        getNums(num, n);
    }
}

getNums(1, 6);

//Task 02
console.log('---Task 02---');

function rowNumbers(A, B) {
    if (A < B) {
        console.log(A);
        A++;
        rowNumbers(A, B)
    } else {
        console.log(A);
        A--;
        if (A >= B) {
            rowNumbers(A, B);
        }
    }
}

rowNumbers(3, 12);

//Task 03
console.log('---Task 03---');

function sumNum(n) {
    return (n !== 1) ? n + sumNum(n - 1) : 1;
}

console.log(sumNum(6));

// OR another solutions
function sumTo(n) {
    if (n === 1) return 1;
    return n + sumTo(n - 1);
}

console.log(sumTo(6));

//Task 04
console.log('---Task 04---');

function rowReverse(n) {
    if (n === 1) return 1;
    return n + ' ' + rowReverse(n - 1);
}

console.log(rowReverse(6));

//Task 05
console.log('---Task 05---');

function rowStraight(n) {
    if (n === 1) return 1;
    return rowStraight(n - 1) + ' ' + n;
}

console.log(rowStraight(6));

//Task 12
console.log('---Task 12---');

let arrLetters = ['a', 'b', 'c'];
let arrNums = [1, 2, 3];

function arrConcat(arrayFirst, arraySecond) {
    return arrayFirst.concat(arraySecond);
}

console.log(arrConcat(arrLetters, arrNums));

//Task 13
console.log('---Task 13---');

function pushElements(array, element) {
    for (let i = 1; i <= element; i++) {
        array.push(i);
    }
    return array;
}

console.log(pushElements(arrLetters, 3));

//Task 14 ??
console.log('---Task 14---');

function unshiftElements(array, element) {
    for (let i = 6; i >= element; i--) {
        array.unshift(i);
    }
    return array;
}

console.log(unshiftElements(arrNums, 4));

//Task 15

console.log('---Task 15---');
let arrNum = [1, 2, 3, 4, 5];

function sliceArr(array) {
    return array.slice(0, 3);
}

console.log(sliceArr(arrNum));

//Task 16
console.log('---Task 16---');
arrNum = [1, 2, 3, 4, 5];

function sliceArr16(array) {
    return array.slice(3);
}

console.log(sliceArr16(arrNum));

//Task 17
console.log('---Task 17---');
arrNum = [1, 2, 3, 4, 5];

function spliceArr(array) {
    array.splice(1, 2);
    return array;
}

console.log(spliceArr(arrNum));

//Task 18
console.log('---Task 18---');
arrNum = [1, 2, 3, 4, 5];

function spliceFirstLast(array) {
    return array.splice(1, 3);
}

console.log(spliceFirstLast(arrNum));

//Task 19
console.log('---Task 19---');
arrNum = [1, 2, 3, 4, 5];

function spliceInsert(array) {
    array.splice(3, 0, 'a', 'b', 'c');
    return array;
}

console.log(spliceInsert(arrNum));

//Task 20
console.log('---Task 19---');
arrNum = [1, 2, 3, 4, 5];

function spliceIns(array) {
    array.splice(1, 0, 'a', 'b');
    array.splice(6, 0, 'c');
    array.splice(array.length, 0, 'e');
    return array;
}

console.log(spliceIns(arrNum));

//Task 21
console.log('---Task 20---');

const newObj = {
    js: 'test',
    jq: 'hello',
    css: 'world',
};

console.log(Object.keys(newObj));