// Task 01 - для массива

function arrayFill(element, arrayLength) {
    const array1 = [];
    for(let i = 0; i < arrayLength; i++) {
        array1.push(element);
    }
    return array1;
}

let task1Res = arrayFill('x', 5);
console.log(task1Res);

// task 02
let arr = [
    [
        [1, 2],
        [3, 4],
    ]
    ,
    [
        [5, 6],
        [7, 8]
    ]
];


function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            for(let y = 0; y < array[i][j].length; y++) {
                sum += array[i][j][y];
            }
        }
    }
    return sum;
}
let task2Res = arraySum(arr);
console.log(task2Res);


//Task 03
function isNumberInRange(number) {
    if (number < 10 && number > 0) {
       return true;
    }
    return false;
}

let task3Res = isNumberInRange(0);
console.log(task3Res);

//Task 04

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}

let task4Res = isEven(224);
console.log(task4Res);

//Task 05

let arrNums = [1, 5, 7, 8, 3, 106, 34, 22, 3, 11, 20, 0, 1032];

function evenFilter(array) {
    let arrEven = [];
    for(let i = 0; i < array.length; i++) {
        let arrElem = array[i];
        if (isEven(arrElem)) {
            arrEven.push(array[i]);
        }
    }
    return arrEven;
}

console.log(evenFilter(arrNums));

//Task 06

function getDivisors(number) {
    let divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

let task6Res = getDivisors(86);
console.log(task6Res);

//Task 07

function power(number, power) {
    console.log(number ** power);
}

power(2, 10);

//Task 08

function userAge(age) {
    if (age > 16)
        console.log('Добро пожаловать');
    else
        console.log('Вы еще молоды');
}

userAge(29);


//Task 09
function userAge9(age) {
    if (age >= 16)
        console.log('Добро пожаловать');
    else if (age < 16)
        console.log('Вы еще молоды');
    else if (age === undefined)
        console.log('Введите возраст');
}

userAge9(16);

//Task 10

function arrLength(array) {
    if (array === undefined)
        console.log('Массив не задан');
    else
        return array.length;
}

console.log(arrLength([3, 8, 2, 15]));
console.log(arrLength());

//Task 11
function userInput(number) {
    if (number > 10)
        return number ** 2;
    else if (number < 7)
        console.log('Число меньше 7');
    else if (number === 8)
        return 7;
    else if (number === 9)
        return 8;
}

console.log(userInput(8));

//Task 12

let myString = 'Long word is not a short word';

function ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1, string.length);
}

function ucEveryWord(string) {
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++ ) {
       words[i]= ucFirst(words[i]);
    }
    return words.join(' ');
}


console.log(ucEveryWord(myString));

//Task 13

let stringHello = 'var_text_hello';
function ucEveryWord(string) {
    let words = string.split('_');
    for (let i = 1; i < words.length; i++ ) {
        words[i]= ucFirst(words[i]);
    }
    return words.join('');
}

console.log(ucEveryWord(stringHello));

//Task 14

let arr14 = ['I', 'He', 'She', "It", "Us", 'We', 'You'];
let textCompare = 'Mom';
function inArray(text, inArray) {
    for (let i = 0; i < inArray.length; i++) {
        if (inArray[i] === text)
            return true;
        else
            return false;
    }
}

console.log(inArray(textCompare, arr14));