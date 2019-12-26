let result;

// task 1
function task1() {

    for (let num = 4; num <= 400; num++) {
        result = num;
        return document.getElementById(`resultInput`).value = num;
    }


}

// task 2
function task2() {

    for (let num = 4; num <= 13; num += 3) {
        console.log(num);
    }

}

// task 3
function task3() {

    for (let num = 654; num >= 0; num--) {
        console.log(num);
    }

}

// task 4
function task4() {

    for (let date = 1983; date <= 2017; date++) {
        console.log(date);
    }
}

// task 5
function task5() {

    for (let num = -4; num <= 100; num += 2) {
        console.log(num);
    }

}

// task 6
function task6() {

    for (let num = 1; num <= 9; num++) {
        console.log(num * 7);
    }

}


// task 7
function task7() {

    for (let num = 1000; num <= 2000; num++) {
        console.log(String.fromCharCode(num));
    }

}

// task 8
function task8() {

    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        sum += i;
    }

    console.log(sum);

}

// task 9
function task9() {

    let composition = 1;

    for (let i = 1; i <= 50; i++) {
        composition *= i;
    }

    console.log(composition);

}

// task 10
function task10() {

    let arrLength = parseInt(prompt(`Введите длину массива`)),
        arr = [],
        symbol = `x`;

    for (let i = 1; i <= arrLength; i++) {
        arr.push(symbol);
        symbol += `x`;
    }

    console.log(arr);

}

// task 11
function task11() {

    const arrLength = parseInt(prompt(`Введите длину массива`)),
        arr = [];
    let num = `1`;

    for (let i = 1; i <= arrLength; i += 1) {
        arr.push(i * num);
        num += `1`;
    }

    console.log(arr);

}

// task12
function task12() {

    const arr = [2, 4, 5, 11, 20, 4];
    let sum = 0;

    for (let i = 1; i <= arr.length; i++) {
        sum += arr[i];
        if (sum > 10) {
            console.log(i);
            break;
        }
    }

}

// task 13
function task13() {

    let arr = [2, 4, 5, 11, 20, 4],
        element;

    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        element = arr[j];
        arr[j] = arr[i];
        arr[i] = element;
    }

    console.log(arr);
}

// task 14
function task14() {

    let arr = [2, 4, 5, 11, 20, 4],
        arrNew = [];

    for (const value of arr) {
        if (value > 0 && value < 10) {
            arrNew.push(value);
        }
    }

    console.log(arrNew);

}

// task 15
function task15() {

    let arr = [2, 4, 5, 11, 20, 4],
        arrNew = [];

    for (const value of arr) {
        if (value % 2 == 0) {
            arrNew.push(value);
        }
    }

    console.log(arrNew);
}

// task 16
function task16() {

    let arr = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i + 1 < arr.length; i += 2) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    console.log(arr);
}

// task 17
function task17() {

    let arr = [1, 2, 3, 4, 5, 6];

    arr.reverse();

    for (let i = 0; i + 1 < arr.length; i += 2) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    console.log(arr);

}

// task 18
function task18() {

    const matrix = [[1, 2, 3], [4, 5], [6]];
    let sum = 0;

    for (const row of matrix) {
        for (const cell of row) {
            sum += cell;
        }
    }

    console.log(sum);

}

// task 19
function task19firstMatrix() {

    let matrix = [[]];

    for (let i = 1; i <= 10; i++) {
        matrix[i - 1] = [[]];
        for (let j = 1; j <= 10; j++) {
            matrix[i - 1][j - 1] = (i * j);
        }
    }

    console.log(matrix);

}

function task19secondMatrix() {

    let matrix = [[]];

    for (let i = 0; i <= 9; i++) {
        matrix[i] = [[]];
        for (let j = 0; j <= 9; j++) {
            if (i === j) {
                matrix[i][j] = 1;
            } else if (j === 9 - i) {
                matrix[i][j] = 2;
            } else if (i > (9 - j) && i < j) {
                matrix[i][j] = 4;
            } else if (i > (9 - j) && i > j) {
                matrix[i][j] = 5;
            } else if (i < (9 - j) && i < j) {
                matrix[i][j] = 3;
            } else if (i < (9 - j) && i > j) {
                matrix[i][j] = 6;
            }
        }
    }

    console.log(matrix);

}

function task19thirdMatrix() {

    let matrix = [[]];

    for (let i = 0; i <= 9; i++) {
        matrix[i] = [[]];
        matrix[i][0] = 1;
        matrix[i][i] = 1;
        for (let j = 1; j < i; j++) {
            matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
        }
    }

    console.log(matrix);

}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}