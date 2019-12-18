console.log(`HW02_Task01`);
{
    let a = prompt(`enter number of a =`, ``);
    b = prompt(`enter number of b =`, ``);
    if (a > b)
        console.log(x = a + b / 2 * 4);
    else if (a === b)
        console.log(x = 400);
    else if (a < b)
        console.log(x = a - b + 2 /b * 4)
}
console.log (`HW02_Task02.1`);

{
    let x = prompt(`enter a coordinate on X-axis`, ``);
    let y = prompt(`enter a coordinate on Y-axis`, ``);
    if ((x >= -4 && x <= 4) && (y >= 0 && y <= 4))
    alert(`Match`);
    else
    alert(`Fail`)
}
console.log (`HW02_Task02.2`);
{
    let x = prompt(`enter a coordinate on X-axis`, ``);
    let y = prompt(`enter a coordinate on Y-axis`, ``);
    if ((y <= 0 && y <= x && y === x && y >= -1) || (y >= 0 && y <= 1 && y === x && y >= x))
        alert(`Match`);
    else
        alert(`Fail`)
    }
    console.log (`HW02_Task02.3`);
{
    let x = prompt(`enter a coordinate on X-axis`, ``);
    let y = prompt(`enter a coordinate on Y-axis`, ``);
    if (x * x + y * y <= 1)
        alert(`Match`);
    else if (y >= -x - 2 && y <= 0 && x <= 0)
        alert(`Match`);
    else
        alert(`Fail`)
}
console.log(`HW02_Task03`);
    let Day = (prompt(`Enter Day`));
    Day = parseFloat(Day);
    switch (Day) {
        case 1:
            alert(`Monday`);
            break;
        case 2:
            alert(`Tuesday`);
            break;
        case 3:
            alert(`Wednesday`);
            break;
        case 4:
            alert(`Thursday`);
            break;
        case 5:
            alert(`Friday`);
            break;
        case 6:
            alert(`Saturday`);
            break;
        case 7:
            alert(`Sunday`);
            break;
        default:
            result = prompt(`Error: please enter correct number`)
    }
console.log(`HW02_Task04-05`);
{
    let firstMessage = parseFloat(prompt(`Enter first number`)),
    secondMessage = parseFloat(prompt(`Enter second number`));
    if (firstMessage > secondMessage)
    console.log(`max.number ${firstMessage}`);
    else if (firstMessage === secondMessage)
    console.log(`equality`);
    else
        console.log(`max.number ${secondMessage}`)
    }
console.log(`HW02_Task06`);
{
    let flatNumber = prompt(`Enter a flat number`);
    if (flatNumber > 1 && flatNumber <= 20)
        alert(`you are in the first entrance`);
    else if (flatNumber >= 21 && flatNumber <= 48)
        alert(`you are in the second entrance`);
    else if (flatNumber >= 49 && flatNumber <= 90)
        alert(`you are in the third entrance`);
    else
        alert(`Error, please try again`)
}
console.log(`HW02_Task07`);
{
    let login = prompt(`Enter login`),
        password = prompt(`Enter password`);
    if (login === `ivan` && password === `334455`)
        alert(`Welcome`);
    else if (login === `alex` && password === `777`)
        alert(`Welcome`);
    else if (login === `petr` && password === `b5678`)
        alert(`Welcome`);
    else
        alert(`Access denied`)
}
console.log(`HW02_Task08`);
{
    let yearOFBirth = prompt(`Enter your year of birth`),
        actualYear = 2019,
        ageLimit = 16;
    if (actualYear - yearOFBirth >= ageLimit)
        alert(`Welcome`);
    else
        alert(`Access denied`)
}
console.log(`HW 02_Task09`);
{
    let workExperience = parseFloat(prompt(`Enter your work experience`));
    if (workExperience >= 0 && workExperience < 3)
        alert(`your salary allowance = 0 %`);
    else if (workExperience >= 3 && workExperience < 10)
        alert(`your salary allowance = 10 %`);
    else if (workExperience >= 10 && workExperience < 20)
        alert(`your salary allowance = 20 %`);
    else if (workExperience >= 20)
        alert(`your salary allowance = 25 %`)
}
console.log(`HW02_Task11`);
{
    let order = prompt(`Please make your order`),
        ageCheck = parseFloat(prompt(`Please enter your age`)),
        yearsStrongAlcohol = 21,
        yearsBeerCigarettes = 18;
    if (order === (`vodka` || `whiskey` || `strong alcohol` && ageCheck >= yearsStrongAlcohol))
        alert(`Money please, enjoy your booze`);
    else if (order === (`beer` || `cigarettes` && ageCheck >= yearsBeerCigarettes))
        alert(`Money please, enjoy your beer / cigarettes`);
        else
        alert(`Order declined because of age limit. Please choose other products`);
    }
console.log (`HW02_Task12`);
{
    let coffeeMachine = parseFloat(prompt(`Choose your drink`));
    switch (coffeeMachine) {
        case 1:
            console.log(`Espresso`);
            break;
        case 2:
            console.log(`Americano`);
            break;
        case 3:
            console.log(`Latte`);
            break;
        case 4:
            console.log(`Cappuccino`);
            break;
        case 5:
            console.log(`Hot Chocolate`);
            break;
        default:
            alert(`Error, please choose from 1 to 5 position`);
    }
}



