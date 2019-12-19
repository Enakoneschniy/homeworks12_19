let Year = new Date().getFullYear();
let YearCheck = (n) => {
    let i = 0;
    let k = n;
    for (i; k > 1; ++i) {
        k /= 10;
    }
    console.log(i)
    if (i != 4) {
        alert('Год рождения в неверном формате, поворите ввод');
        Input();
    }
    else {
        console.log(Year);
        console.log(n);
       Year  - n >= 16 ? console.log('Добро пожаловать') : console.log('Вход воспрещен')
    }
}
let Input = () => {
    let Year = parseInt(prompt('Введите год рождения ****'))
    YearCheck(Year);
}
Input();