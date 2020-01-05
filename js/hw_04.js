import {isEven, map, randomArray, randomInteger, sequence, square, take, ucFirst} from './helperFunctions.js';

{
    console.log('*Task 1*');

    function arrayFill(element, arrayLength) {
        const array = [];
        for (let i = 0; i < arrayLength; i++) {
            array.push(element);
        }
        return array;
    }

    let task1Res = arrayFill('x', 5);
    console.log(task1Res);
}
{
    console.log('*Task 2*');
    const sum =
        [
            [
                [1, 2],
                [3, 4]
            ],
            [
                [5, 6],
                [7, 8]
            ]
        ]
            .reduce((resArr, itemArray) => [...resArr, ...itemArray], [])
            .reduce((resArr, itemArray) => [...resArr, ...itemArray], [])
            .reduce((sum, item) => sum + item, 0);
    console.log(sum);
}
{
    console.log('*Task 3*');

    function isNumberInRange(n) {
        return n > 0 && n < 10 // true
    }

    console.log('3:', isNumberInRange(3)); // true
    console.log('10:', isNumberInRange(10)); // false
    console.log('-4:', isNumberInRange(-4)); // false
    console.log('7:', isNumberInRange(7)); // true
}

{
    console.log('*Task 4*');
    let num = randomInteger(0, 100);
    let checkEven = isEven(num);
    console.log(num, '-', checkEven);
}
{
    console.log('*Task 5*');
    let arr = randomArray(7);
    let checkEven = arr.filter(isEven);
    console.log(arr, '-', checkEven);
}
{
    console.log('*Task 6*');
    let rnd = randomInteger(1, 200);

    function getDivisors(int) {
        let arr = [];
        for (let i = 1; i <= int; i++) {
            if (int % i === 0) arr.push(i);
        }
        return (arr.length === 0) ? int + ' is prime' : arr;
    }

    console.log(rnd, getDivisors(rnd));
}
{
    console.log('*Task 7*');
    let num = randomInteger(1, 25);
    let pwr = randomInteger(2, 7);
    const res = num ** pwr;
    console.log(num + ' ^ ' + pwr + '  =' + res);
}
{
    console.log('*Task 8*');
    let age = randomInteger(10, 30);

    function checkAge(age) {
        return (age > 16) ? console.log(age, 'Добро пожаловать') :
            console.log(age, 'Маловат ты еще');
    }

    checkAge(age);
}
{
    console.log('*Task 9*');

    let res;
    const age = randomInteger(10, 30);

    function checkAge(age) {
        if (age >= 16)
            res = 'Добро пожаловать';
        else if (age < 16)
            res = 'Маловат ты еще';
        else if (age === undefined)
            res = 'Годиков то тебе сколько?'
    }

    checkAge(age);
    console.log(age, res);
    console.log(checkAge(), res); // undefined
}
{
    console.log('*Task 10*');

    let randomArr = randomArray(7);

    function arrLength(array) {
        if (array === undefined)
            console.log('Массив задай');
        else
            return array.length;
    }

    console.log(randomArr);
    console.log(arrLength(randomArr));
}
{
    console.log('*Task 11*');

    let littleNum, num8, num9, rndNum;
    num8 = 8;
    num9 = 9;
    littleNum = randomInteger(1, 7);
    rndNum = randomInteger(10, 1000000);

    function userInput(number) {
        if (number >= 10)
            return number ** 2;
        if (number <= 7)
            return 'Число меньше 7';
        if (number === 8)
            return 7;
        if (number === 9)
            return 8;
    }

    console.log(littleNum, userInput(littleNum));
    console.log(num8, userInput(num8));
    console.log(num9, userInput(num9));
    console.log(rndNum, userInput(rndNum));
}
{
    console.log('*Task 12*');
    let stringSpace = 'sed in libero ut nibh placerat accumsan praesent metus tellus elementum eu semper a adipiscing nec purus cras non dolor';

    function ucBigLetter(string) {
        let words = string.split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = ucFirst(words[i]);
        }
        return words.join(' ');
    }

    console.log(ucBigLetter(stringSpace));
}
{
    console.log('*Task 13*');
    let stringUnder = 'sed_in_libero_ut_nibh_placerat_accumsan_praesent_metus_tellus_elementu_eu_semper_a_adipiscing_nec_purus_cras_non_dolor';

    function ucUnderline(string) {
        let words = string.split('_');
        for (let i = 1; i < words.length; i++) {
            words[i] = ucFirst(words[i]);
        }
        return words.join('');
    }

    console.log(ucUnderline(stringUnder));
}
{
    console.log('*Task 14*');
    let arrPcModels = [
        'HP',
        'LG',
        'MSI',
        'IBM',
        'Acer',
        'Asus',
        'Dell',
        'Sony',
        'Apple',
        'Lenovo',
        'Microsoft',
        'Panasonic'
    ];
    let searchDendi = 'Dendi';
    let searchIBM = 'IBM';

    function inArray(array, text) {
        return array.some(function (search) {
            return search === text
        })
    }

    console.log('IBM', inArray(arrPcModels, searchIBM));
    console.log('Dendi', inArray(arrPcModels, searchDendi));
}
{
    console.log('*Task 15*');

    const oldString = '123456';

    function convertString(string) {
        let newString = [];
        for (let i = 0; i < string.length - 1; i += 2) {
            newString[i + 1] = string[i];
        }
        for (let i = 1; i < string.length; i += 2) {
            newString[i - 1] = string[i];
        }
        if (string.length % 2 === 1)
            newString.push(string[string.length - 1]);
        return newString.join('');
    }

    let newString = convertString(oldString);
    console.log(oldString, ' ---> ', newString);
}
{
    console.log('*Task 16*');

    let generatorA = sequence(70, 150);

    console.log('genA-1', generatorA());
    console.log('genA-2', generatorA());
    console.log('genA-3', generatorA());
    console.log('genA-4', generatorA());

    let generatorB = sequence();

    console.log('genB-1:', generatorB());
    console.log('genB-2:', generatorB());
    console.log('genB-3:', generatorB());
    console.log('genB-4:', generatorB());
}
{
    console.log('*Task 17*');
    let generatorTake = sequence(0, 2);
    console.log('take: ', take(generatorTake, 15));
}
{
    console.log('*Task 18*');
    console.log('clear array: ', map(square, []));
    console.log('full array: ', map(square, [1, 2, 3, 4]));
}
{
    console.log('*Task 19*');
    let fmap = function (a, gen) {
        return function () {
            let argsCount = arguments.length;
            let createArray = [];
            for (let i = 0; i < argsCount; i++) {
                createArray[i] = arguments[i];
            }
            return a(gen.apply(null, createArray));
        }
    };
    let gen = sequence(1, 1);
    let squareGen = fmap(square, gen);
    console.log('squareGen-1:', squareGen());
    console.log('squareGen-2:', squareGen());
    console.log('squareGen-3:', squareGen());
    console.log('squareGen-4:', squareGen());
    console.log('squareGen-5:', squareGen());
}
{
    console.log('*Task 20*');

    let input = [1, 2, 3, 4, 5, 6];

    function filter(input, even) {

    }

    console.log(filter(input, isEven));
}

