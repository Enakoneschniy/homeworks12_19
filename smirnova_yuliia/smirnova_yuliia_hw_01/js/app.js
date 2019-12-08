// task_01

let a = 3;
    b = 6;

if (a > b) {
    console.log(x = a + b / 2 * 4)
} else if (a === b){
    console.log(x = 400)
} else if (a < b ) {
    console.log(x = a - b + 2 / b * 4)
}


// //task_02
// //task_02_01
// let coordinateX = prompt('Координата по оси X', );
// let coordinateY = prompt('Координата по оси Y', );
//
// y = -0.5*x - 1
// y = 0.5*x + 1
// if (coordinateY >= 1 - coordinateX){
//     alert("Точка попадает в область")
// } else {
//     alert("Точка НЕ попадает в область")
// }
//
// //task_02_02


//task_03

let weekNumber = prompt("Введите номер дня недели", );
    if (weekNumber == 1){
        alert("Понедельник")
    } else if (weekNumber == 2){
        alert("Вторник")
    } else if (weekNumber == 3){
        alert("Среда")
    } else if (weekNumber == 4){
        alert("Четверг")
    } else if (weekNumber == 5){
        alert("Пятница")
    } else if (weekNumber == 6){
        alert("Суббота")
    } else if (weekNumber == 7){
        alert("Воскресенье")
    } else {
        alert("Такого дня недели не существует!")
}

//task_04

let userInputNumberFirst = prompt("Введите первое число", );
let userInputNumberSecond = prompt("Введите второе число", );
    if (userInputNumberFirst > userInputNumberSecond) {
        alert(userInputNumberFirst)
    } else if (userInputNumberSecond > userInputNumberFirst){
        alert(userInputNumberSecond)
    }

//task_05
let userInputNumberOne = prompt("Введите первое число", );
let userInputNumberTwo = prompt("Введите второе число", );
if (userInputNumberOne > userInputNumberTwo) {
    alert(userInputNumberOne)
} else if (userInputNumberTwo > userInputNumberOne){
    alert(userInputNumberTwo)
} else if (userInputNumberTwo === userInputNumberOne){
    alert('Числа равны')
}

