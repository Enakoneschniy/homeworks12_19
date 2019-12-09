let userYearOfBirth = prompt("Введите ваш год рождения");
let userAge = 2019 - userYearOfBirth;
if (userAge >= 16) {
    alert("Добро пожаловать")
} else {
    alert("Вход воспрещен")
}