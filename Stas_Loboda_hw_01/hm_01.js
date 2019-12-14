//Task 2
{
    let x = prompt('Coordinate x?')
    let y = prompt('Coordinate y?')

    if ((Math.abs(x) + Math.abs(y) <= 4) && y >= 0) {

        alert('Точка попадает в область');
    } else {

        alert('Точка не попадает в область');
    }
}
{
    let x = prompt('Coordinate x?')
    let y = prompt('Coordinate y?')
    if (y > 0)
    {

        if (Math.abs(x) + Math.abs(y) <= 2 && (Math.abs(x) <= Math.abs(y)))
        {

            alert('Точка попадает в область')
        }
        else {
            alert('Точка не попадает в область');
        }
    }
    else {

        if ((Math.abs(x)+ Math.abs(y) <=2) && (Math.abs(x) >= Math.abs(y)))
        {

            alert('Точка попадает в область');
        }

        else {

            alert('Точка не попадает в область');
        }
    }
}
{
    let x = prompt('Coordinate x?')
    let y = prompt('Coordinate y?')

    if (Math.sqrt(x * (x) + y * (y)) <= 1) {

        alert('Точка попадает в область');
    } else if (Math.abs(x) + Math.abs(y) <= 2 && x < 0 && y < 0) {

        alert('Точка попадает в область');
    } else {
        alert('Точка не попадает в область');
    }
}



//Task 3
{
    let day = prompt('Number day?')

    switch (day) {
        case '1':
            alert('Monday');
            break;
        case '2':
            alert('Tuesday')
            break;
        case '3':
            alert('Wednesday');
            break;
        case '4':
            alert('Thursday');
            break;
        case '5':
            alert('Friday');
            break;
        case '6':
            alert('Saturday');
            break;
        case '7':
            alert('Sunday');
            break;
        default:
            alert('Такого дня не существует')
            break;
    }
}

//Task 4, 5
{
    let first = prompt('Введите первое число');
    let second = prompt('Введите второе число');

    if (first > second){
        alert('first');

    } else if (first == second)
    {
        alert('Числа равны')
    }
    else {
        alert('second');
    }
}

//Task 6
{
    let porch = prompt('Number flat');

    if (porch <= 20) {
        alert('Квартира в первом подьезеде');
    } else if ((porch > 20) && (porch <= 27)) {
        alert('Квартира в втором подьезеде')
    } else if ((porch > 27) && (porch <= 41)) {
        alert('Квартира в третьем подьезеде')
    } else {
        alert('Не существует таких квартир');
    }
}

//Task 7
{
    let userName = prompt("What your login?");
    let pass = prompt("What your password?");

    if (userName == 'Ivan' && pass == '334455')
    {
        alert('Welcome!');
    }
    else if (userName == 'Alex' && pass == '777') {
        alert('Welcome!');
    }
    else if (userName == 'Petr' && pass == 'b5678') {

        alert('Welcome!');

    }
    else {
        alert('Incorrect');
    }
}
//Task 8
{
    let years = prompt("Year of birth");
    let now = new Date();
    let today = new Date(now.getFullYear());
    let age;

    age = today - years;

    if (age >= 16) {

        alert(age + ' welcome');
    } else {
        alert(age + ' No entry');
    }
}

//Task 9
{
    let exper = prompt("Enter experience");

    if(exper == 0 && exper < 3 ){
        alert('0%');
    }
    else if(exper == 3 && exper < 10) {

        alert('10%');
    }
    else if(exper == 10 && exper < 20){
        alert('20%');
    }
    else if( exper == 20 && exper > 20){
        alert('25%');
    }
    else {
        alert('Not experience');
    }
}
//Task 1
{
    let a = prompt("Enter condition");
    let b = prompt("Enter condition");
    let x = 0;
    if (a > b)
    {
        x =(+a + +b / 2 * 4);
    }
    else if (a === b)
    {
        x = (400);
    }
    else if (a < b)
    {
        x = (+a - +b + 2 / b * 4);
    }
    else
    {
        alert('Wrong condition');
    }
    alert(x);
}

//Task 10
{
    let продукт = prompt("Сколько продуктов в наличии");
    if (продукт == 1 )
    {
        alert( продукт+ '  Продукт ');
    }
    else if (продукт >= 1 && продукт <= 4)
    {
        alert(продукт+'  Продукта');
    }
    else if (продукт >= 4 && продукт <= 20)
    {
        alert(продукт+ '  Продуктов');
    }
    else if (продукт >= 20 && продукт <= 100)
    {
        alert(продукт+ '  Продукт');
    }
    else
    {
        alert('Не склоняется');
    }
}
//Task 11
{
    let cashier = prompt("What do you want?");
    if (cashier < 18)
    {
        alert('You can buy everything except alcohol and cigarettes');
    }
    else if (cashier >= 18 && cashier <= 21)
    {
        alert('You can buy low alcohol drinks and cigarettes');
    }
    else if (cashier > 21)
    {
        alert('You can buy anything you want');
    }
    else
    {
        alert('Can\'t buy anything');
    }
}

//Task 12
{
    switch (coffee) {
        case 'Americano':
            alert('boiling water and espresso');
            break;
        case 'Classic':
            alert('coffee and boiling water');
            break;
        case 'Late':
            alert('serving of espresso and milk');
            break;
        case 'Espresso':
            alert('the passage of hot water under a pressure of 9 bar through a filter with ground coffee');
            break;
        case 'Cappuccino':
            alert('espresso with the addition of heated frothed milk');
            break;
        case 'Macchiato':
            alert('portions of espresso and a small amount of milk');
            break;
        case 'black tea':
            alert('black tea and boiling water');
            break;
        case 'green tea':
            alert('green tea and boiling water');
            break;
        default:
            alert('the coffee machine does not work');
            break;
    }
}

