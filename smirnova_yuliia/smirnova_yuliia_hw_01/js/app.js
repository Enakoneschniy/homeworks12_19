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
    alert(`Максимальное число ${userInputNumberFirst}`)
} else if (userInputNumberSecond > userInputNumberFirst){
    alert(`Максимальное число ${userInputNumberSecond}`)
}

//task_05
let userInputNumberOne = prompt("Введите первое число", );
let userInputNumberTwo = prompt("Введите второе число", );
if (userInputNumberOne > userInputNumberTwo) {
    alert(`Максимальное число ${userInputNumberOne}`)
} else if (userInputNumberTwo > userInputNumberOne){
    alert(`Максимальное число ${userInputNumberTwo}`)
} else if (userInputNumberTwo === userInputNumberOne){
    alert('Числа равны')
}

//task_06
let apartmentNumber = prompt('Введите номер квартиры');
if (apartmentNumber >= 1 && apartmentNumber <= 20) {
    alert("Квартира находится в подъезде №1")
} else if (apartmentNumber >= 21 && apartmentNumber <= 48) {
    alert("Квартира находится в подъезде №2")
} else if (apartmentNumber >= 48 && apartmentNumber <= 90) {
    alert("Квартира находится в подъезде №3")
} else {
    alert("Такой квартиры нет. В этом доме квартиры с номерами 1-90")
}

//task_07
let userLogin = prompt("Введите ваш логин");
userPassword = prompt("Введите ваш пароль");
if (userLogin === 'ivan' && userPassword === 334455) {
    alert("Добро пожаловать")
} else if (userLogin === 'alex' && userPassword === 777){
    alert("Добро пожаловать")
} else if (userLogin === 'petr' && userPassword === b5678){
    alert("Добро пожаловать")
} else {
    alert("Ошибка входа")
}

//task_08
let userYearOfBirth = prompt("Введите ваш год рождения");
let userAge = 2019 - userYearOfBirth;
if (userAge >= 16) {
    alert("Добро пожаловать")
} else {
    alert("Вход воспрещен")
}

//task_09
let workExperience = prompt("Введите ваш стаж работы (кол-во лет)");
if (workExperience >= 0 && workExperience <= 3) {
    alert("Ваша надбавка к зарплате 0%")
} else if (workExperience >= 3 && workExperience <= 10) {
    alert("Ваша надбавка к зарплате 10%")
} else if (workExperience >= 10 && workExperience <= 20) {
    alert("Ваша надбавка к зарплате 20%")
} else if (workExperience >= 20 ) {
    alert("Ваша надбавка к зарплате 25%")
}

//task_10
let itemWord = "товар";
let itemAmount = prompt("Введите число предметов у вас в корзине");

let lastNumber = itemAmount[itemAmount.length - 1];
if (lastNumber == 1) {
    alert(`У вас в корзине ${itemAmount + ' ' + itemWord}`)
} else if (lastNumber >= 2 || lastNumber <= '4') {
    alert(`У вас в корзине ${itemAmount + ' ' + itemWord + 'а'}`)
} else if (lastNumber <= 9 || lastNumber >= '5' || lastNumber === 0) {
    alert(`У вас в корзине ${itemAmount + ' ' + itemWord  + 'ов'}`)
}

//task_11
















