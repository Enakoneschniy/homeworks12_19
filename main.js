function userAge(age) {
    if (age > 16) {
        alert("Welcome!")
    } else if (age === undefined) {
        alert("Введите возраст!")
    } else {
        alert("No entry!")
    }
}

console.log(userAge(22));