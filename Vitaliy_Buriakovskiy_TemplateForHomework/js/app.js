function task1() {

    function arrayFill(data, lenght) {
        let arr = [];
        while (lenght--) arr[lenght] = data;

        return arr;
    }

    return arrayFill('x', 5);
}

function task2() {

    let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

    let sum = arr.reduce((resArr, currItem) => resArr.concat(currItem))
        .reduce((resArr, currItem) => resArr.concat(currItem))
        .reduce((sum, currItem) => sum + currItem);

    return sum;
}

function task3() {

    function isNumberInRange(num) {
        return (num > 0 && num < 10)
    }

    return isNumberInRange(5);
}

function task4() {

    return isEven(6);  //Look helpFunction
}

function task5() {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8];

    let arrEven = arr.filter(currItem => isEven(currItem));

    return arrEven;
}

function task6() {

    function getDivisors(num) {
        let arr = [];

        for (let i = 2; i < num; i++) {
            if ((num / i) % 1 === 0) arr[arr.length] = i;
        }
        return arr;
    }

    return getDivisors(70).toLocaleString();
}

function task7() {

    function getInDegree(num, degree) {
        return num ** degree;
    }

    return getInDegree(2, 3);
}
