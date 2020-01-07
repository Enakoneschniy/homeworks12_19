
function fillArray(item, amountElements) { // Task 1

    let newArr = []
    for (i = 0; i <= amountElements; i++) {
        newArr.push(item)
    }
    return item
}


//Task 2

function itemsSum(array) {

    let sum = 0

    for (item of array) {

        if (Array.isArray(item)) {

            itemsSum(item)
        }

        else {

            sum += item
            return

        }

    }

    console.log(sum)

}



//Task 3

function isNumberInRange(num) {

    if (num > 0 && num < 10) {

        return true

    }

    else {

        return false

    }

}





//Task 4

function isEven(num) {

    if (num % 2 === 0) {

        return true

    }

    else {

        return false

    }

}


//Task 5

function collectEvenNumbers(array) {

    const newArr = []

    array.forEach(function (item) {
        if (isEven(item)) {
            newArr.push(item)
        }
    })

    return newArr

}

//Task 6

function getDivisors(num) {

    const newArr = []

    for (let i = 1; i <= num; i++) {

        if (num % i === 0) {

            newArr.push(i)

        }

        return newArr

    }
}

//Task 7

const raiseToThePower = (num, power) => { console.log(num ** power) }

//Task 8

function checkAge(age) {

    if (age >= 16) {
        return 'Welcome'
    }
    else {
        return "You're too young"
    }

}

//Task 9

function checkUserAge(age) {

    if (age === undefined || !isNaN(+age)) {
        return 'Enter your age'
    }
    else if (age >= 16) {
        return 'Welcome'
    }
    else {
        return "You're too young"
    }

}

//Task 10

function getArrayLength(array) {

    if (!array || !Array.isArray(array)) {
        return 'Error'
    }

    else {
        return array.length
    }

}

//Task 11

function getNumber(num) {

    if (num > 10) {
        return Math.sqrt(num)
    }
    else if (num < 7) {
        return 'Number is less than 7'
    }
    else if (num == 8) {
        return 7
    }
    else if (num == 9) {
        return 8
    }
}

//Task 12

function ucfirst(string) { //Hlprfnctn

    let newString = string[0].toUpperCase()
    return newString += string.slice(1)


}

function makeFirstLettersInUpperCase(string) {


    let newString = string.split(' ')
        .reduce((str, item, index, array) => {
            if (index < array.length - 1) {
                str += ucfirst(item) + ' ';
            }
            else {
                str += ucfirst(item)
            }
            return str
        }, '')

    return newString
}


//Task13

function toCamelCase(string) {

    let newString = string.split('_')
        .reduce((str, item, index, array) => {
            if (index === 0) {
                str += item;
            }
            else {
                str += ucfirst(item)
            }
            return str
        }, '')

    return newString
}

//Task14

function inArray(string, array) {

    let result

    array.forEach(item => {


        if (typeof item === 'string') {

            if (item.indexOf(string) >= 0) {


                result = true
                return

            }

        }


    })

    return (result === true)

}

//Task15

function getDifferentString(string) {

    let newString = ''

    for (i = 0; i < string.length; i += 2) {

        if (i % 2 === 0) {

            newString += string[i + 1] + string[i]

        }
    }

    return newString

}

//Task16

function sequence(start = 0, step = 1) {

    let currentNum = start - step


    return () => currentNum += step

}


//Task17

function take(gen, times) {

    let arr = []

    for (i = 0; i <= times; i++) {
        arr.push(gen())
    }

    return arr
}

//Task18

function map(fn, array) {
    
    // the simpliest way
    // return array.map(fn)

    let newArr = []

    for (item of array) {

        newArr.push(fn(item))
    }

    return newArr
}

// Check:
// function square(x) {return x * x}

// console.log(map(square, [1, 2, 3, 4, 5, 6]));


//Task19

function fmap(a, gen) {

    let generator = gen,
        fn = a

    return (...args) => {

        if (args.length === 0) {

            return fn(generator())

        }

        else {

            return fn(generator.apply(this, args))

        }

    }

}

// Check:
// let gener = sequence(1, 1)
// function square(x) { return x * x }
// let squareGen = fmap(square, gener)

// console.log(squareGen());
// console.log(squareGen(1, 2));
// console.log(squareGen());

// function add(a, b) {

//     return a + b
// }

// let squareAdd = fmap(square, add)

// console.log(squareAdd(2, 3));
// console.log(squareAdd(5, 7));

//Task 20

function filter(array, fn) {

    let newArr = []

    array.forEach(value => {

        if (fn(value)) {



            newArr.push(value)

        }

    })
    return newArr

}

// Check
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], isEven))

let array = [1, 2, 3],
    arr2 = [3, 4, 5]

console.log(array.push(arr2));
console.log(array);

