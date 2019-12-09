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