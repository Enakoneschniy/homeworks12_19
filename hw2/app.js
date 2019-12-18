function runTask1() {
    let num = 4

    while (num <= 400) {
        console.log(num)
        num++
    }
}

function runTask2() {
    let num = 4

    while (num <= 13) {
        console.log(num)
        num += 3

    }
}

function runTask3() {
    let num = 653

    while (num >= 0) {
        console.log(num)
        num--

    }

}

function runTask4() {
    let year = 1983

    while (year <= 2017) {
        console.log(year)
        year++
    }

}

function runTask5() {
    let num = -4

    while (num <= 100) {
        console.log(num)
        num += 2

    }
}

function runTask6() {
    let num = 1
    const coef = 7

    while (num <= 9) {
        console.log(num * coef)
        num++
    }

}

function runTask7() {
    let codeNumber = 1000

    while (codeNumber <= 2000) {
        console.log(`$#${codeNumber}`)
        codeNumber++

    }
}

function runTask8() {
    let num = 0,
        amount = 0

    while (num <= 100) {
        amount += num
        num++

    }

    alert(`Amount for numbers from 0 to 100: ${amount}`)
}

function runTask9() {
    let num = 1,
        product = 1

    while (num <= 50) {
        product *= num
        num++
    }

    alert(`Product for numbers from 1 to 50: ${product}`)
}

function runTask10() {
    const length = prompt('Enter a length of array:'),
        array = []
    let element = 'x'

    while (array.length < length) {
        array.push(element)
        element += 'x'
    }

    console.log(array);


}

function runTask11() {
    const length = prompt('Enter a length of array:'),
        array = []
    let num = 1,
        coef = '1'

    while (array.length < length) {
        array.push(num * coef)
        num += 1
        coef += '1'
    }

    console.log(array);

}

function runTask12() {
    const array = []
    let amountOfNumbers = 0,
        amountOfIterations = 0

    for (let i = 1; i <= 20; i++) {              //adding 20 random elements to the array
        array.push(Math.random() * 10)
    }

    console.log(array)

    for (; amountOfNumbers <= 10; amountOfIterations++) {

        amountOfNumbers += array[amountOfIterations]
    }

    console.log(amountOfIterations)

}

function runTask13() {

    const array = []

    for (let i = 1; i <= 20; i++) {              //adding 20 random elements to the array
        array.push(Math.random() * 10)
    }

    console.log(array)

    for (let i = 0, k = array.length - 1; i < (array.length - 1) / 2; i++ , k--) {  //amount of iterations for this operation is equal to                             
        [array[i], array[k]] = [array[k], array[i]]                                 //  amount of elements
    }

    console.log(array)



}

function runTask14() {

    const array1 = [],
        array2 = []

    for (let i = 1; i <= 20; i++) {              //adding 20 random elements to the array1
        array1.push(Math.random() * 20)
    }

    for (let elem of array1) {

        if (elem > 0 && elem < 10) {

            array2.push(elem)

        }


    }
    console.log(array2)
}

function runTask15() {

    const array1 = [],
        array2 = []

    for (let i = 1; i <= 20; i++) {              //adding 20 random elements to the array1
        let elem = Math.random() * 50
        array1.push(elem.toFixed())
    }

    for (let elem of array1) {

        if (elem % 2 === 0) {
            array2.push(elem)
        }
    }
    console.log(array2)
}

function runTask16() {

    const array = [1, 2, 3, 4, 5, 6]

    for (let i = 0; i < array.length; i += 2) {

        [array[i], array[i + 1]] = [array[i + 1], array[i]]

    }
    console.log(array)

}

function runTask17() {

    let arr = [1, 2, 3, 4, 5, 6];
    
    console.lot(arr)

    [arr[0], arr[1], arr[4], arr[5]] = [arr[4], arr[5], arr[0], arr[1]]

    console.log(arr)

}

function runTask18() {

    const arr = [[1, 2, 3], [4, 5], [6]]

    let amount = 0

    for (elem of arr) {

        if (Array.isArray(elem)) {

            for (num of elem) {

                amount += num

            }

        }

        else {
            amount += elem

        }

    }

    console.log(amount)

}


function runFirstTaskInTask19() {

    const matrix = []
    let coef

    for (coef = 1; coef <= 10; coef++) {

        matrix.push([])

        for (let i = 1; i <= 10; i++) {

            matrix[coef-1].push(i * coef)

        }

        console.log(matrix[coef-1])

    }

}
