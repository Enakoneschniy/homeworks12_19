// task 1
function task1() {

    let symbol = prompt(`Enter symbol`),
        colCount = prompt(`Enter length of array`);

    function arrayFill(symbol, colElements) {
        let array = [];

        for (let i = 0; i < colElements; i++) {
            array.push(symbol);
        }

        return array;
    }

    console.log(arrayFill(symbol, colCount));
}


// task 2
function task2() {

    const matrix = [
        [
            [1, 2], [3, 4]
        ],
        [
            [5, 6], [7, 8]
        ]
    ];

    function sumOfMatrix(...array) {

        let sum = 0;

        for (let i = 0; i <= array.length; i++) {
            array[i] = [];
            for (let j = 0; j <= array.length; j++) {
                sum += array[i][j];
            }
        }

        return sum;
    }

    console.log(sumOfMatrix(matrix));

}

// task 3
function task3() {

    let number = prompt(`Enter the number`);

    function isNumberInRange(number) {
        return (number > 0 && number < 10) ? true : false;
    }

    console.log(isNumberInRange(number));

}

// task 4
function task4() {

    let number = prompt(`Enter the number`);

    console.log(isEven(number));

}

// task 5
function task5() {

    let array = [],
        length = parseInt(prompt(`Enter the length of array`)),
        newArray = [];

    for (let i = 0; i < length; i++) {
        array.push(Math.round(Math.random() * 100));
    }

    console.log(array);

    for (const value of array) {
        if (isEven(value)) {
            newArray.push(value);
        }
    }

    console.log(newArray);

}

// task 6
function task6() {

    let number = parseInt(prompt(`Enter the number`));

    function getDivisors(number) {

        let array = [];

        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                array.push(number);
            }

            return array;
        }

    }

    console.log(getDivisors(number));

}

// task 7
function task7() {

    let number = prompt(`Enter the number`),
        power = prompt(`Enter the power`)

    function toPower(number, power) {
        return number ** power;
    }

    console.log(toPower(number, power));

}

// task 8
function task8() {

    let age = prompt(`How old are you?`);

    function checkUserAge(age) {

        let message;

        if (age > 16) {
            message = `Welcome!`;
        } else if (age < 16) {
            message = `You are still young`;
        }

        return message;

    }

    console.log(checkUserAge(age));

}

// task 9
function task9() {

    let age = prompt(`How old are you?`);

    function checkUserAge(userAge) {

        let message;

        while (userAge === undefined || userAge.length === 0) {
            alert(`Enter the age!`);
            userAge = prompt(`How old are you?`);
        }

        age > 16 ? message = `Welcome!` : message = `You are still young`;

        return message;

    }

    console.log(checkUserAge(age));

}

// task 10
function task10() {

    let array = [],
        arrayLength;

    do {
        arrayLength = prompt("Enter array length");
    } while (arrayLength == 0);

    for (let i = 0; i < arrayLength; i++) {
        array.push(Math.round(Math.random() * 100));
    }

    function checkArrayLength(...array) {

        let length = 0;

        for (let i = 0; i < arrayLength; i++) {
            length += 1;
        }

        return length;

    }

    console.log(checkArrayLength(array));

}

// task 11
function task11() {

    let number = parseInt(prompt(`Enter the number`));

    function checkNumber(number) {

        let message;

        return (number > 10) ? number = number ** 2 :
            (number === 7 || number === 8 || number === 9) ? number :
                (number < 7) ? message = `Number less then 7` : message = `Введите число`;

    }

    console.log(checkNumber(number));

}

// task 12
function task12() {

    let string = prompt(`Enter string`).toString();

    /**
     Take all characters without spaces (\ S) at the beginning of a line (^)
     or after any space character (\ s) and convert them to uppercase (toUpperCase)
     */

    function ucfirst(string) {
        return string.replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
    }

    console.log(ucfirst(string));

}

// task 13
function task13() {

    let string = `var_text_hello`;

    function deleteUnderscore(string) {
        return string.replace(/(_)\S/g, (letter) => letter.toUpperCase())
            .replace(/(_)/g, ``);
    }

    console.log(deleteUnderscore(string));

}

// task 14
function task14() {

    let array = [`Hello`, 2, `something`, 7];

    console.log(array);

    function inArray(text, array) {
        return array.indexOf(text) != -1;
    }

    console.log(inArray(`something`, array));

}

// task 15
function task15() {

    let string = '123456';

    function changeString(string) {
        return string.replace(/(.)(.)?/g, "$2$1");
    }

    console.log(changeString(string));

}

// task 16
function task16() {

    let generator = sequence(10, 3);
    let generator2 = sequence(7, 1);

    console.log(generator());
    console.log(generator());

    console.log(generator2());

    console.log(generator());

    console.log(generator2());


}

// task 17
function task17() {

    function take(gen, x) {

        let array = [];
        for (let i = 1; i <= x; i++) {
            array.push(gen());
        }
        return array;

    }

    let gen2 = sequence(0, 2);

    console.log(take(gen2, 5));

}

// task 18
function task18() {

    let array = [1, 2, 3, 4];

    function square(x) {
        return x ** 2;
    }

    function map(fn, array) {

        let newArr = [];

        for (let i = 0; i < array.length; i++) {
            newArr[i] = fn(array[i]);
        }

        return newArr;
    }

    console.log(map(square, array));
    console.log(array);
    
}

// task 19
function task19() {

    let gen = sequence(1, 1),
        squareGen = fmap(square, gen),
        squareAdd = fmapAdd(square, add);

    function fmap(a, gen) {
        return function () {
            return a(gen());
        }
    }

    function square(x) {
        return x ** 2;
    }

    function add(a, b) {
        return a + b;
    }

    function fmapAdd(a, add) {
        return function () {
            return a(add.apply(this, arguments));
        }
    }


    console.log(squareGen());
    console.log(squareGen());
    console.log(squareGen());
    console.log(squareGen());

    console.log(squareAdd(2, 3));
    console.log(squareAdd(5, 7));

}

// task 20
function task20() {

    let input = [1, 2, 3, 4, 5, 6];

    function filter(array, predicate) {
        let newArr = [];

        predicate = isEven;

        for (let i = 0; i < array.length; i++) {
            if (predicate(array[i])) {
                newArr.push(array[i]);
            }
        }
        return newArr;
    }

    console.log(filter(input, isEven));

}