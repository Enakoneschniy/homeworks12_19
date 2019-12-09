{
    console.log(`Task №1`);

    let a;
    let b;
    let x;

    a = prompt("Enter a number a =");
    b = prompt("Enter a number b =");

    if (a > b) x = a + b / 2 * 4;
    if (a = b) x = 400;
    if (a < b) x = a - b + 2 / b * 4;

    console.log(`Result = ${x}`);
}
{
    {
        console.log(`Task №2.1`);
        let xa = -4,
            xb = 0,
            xc = 4;
        let ya = 0,
            yb = 3,
            yc = 0;

        let x0 = prompt("Enter a number a =");
        let y0 = prompt("Enter a number b =");

        console.log(`Poin included in Triangle = ${includedInTriangle(xa, xb, xc, x0, ya, yb, yc, y0)}`);
    }

    {
        console.log(`Task №2.2`);
        let x1a = -1,
            x1b = 0,
            x1c = 1;
        let y1a = 1,
            y1b = 0,
            y1c = 1;
        let x2a = -1,
            x2b = 0,
            x2c = 1;
        let y2a = -1,
            y2b = 0,
            y2c = -1;

        let x0 = prompt("Enter a number a =");
        let y0 = prompt("Enter a number b =");
        {
            let rezult1 = includedInTriangle(x1a, x1b, x1c, x0, y1a, y1b, y1c, y0);
            let rezult2 = includedInTriangle(x2a, x2b, x2c, x0, y2a, y2b, y2c, y0);
            if (rezult1 || rezult2) {
                console.log(`Poin included in Triangle = ${'True'}`);
            } else {
                console.log(`Poin included in Triangle = ${'False'}`);
            }
        }

    }

    {
        console.log(`Task №2.3`);
        let xa = -2,
            xb = 0,
            xc = 0;
        let ya = 0,
            yb = 0,
            yc = -2;
        let xPointCircle = 0,
            yPointCircle = 0,
            radiusCircle = 1;

        let x0 = prompt("Enter a number a =");
        let y0 = prompt("Enter a number b =");

        let rezult1 = includedInTriangle(xa, xb, xc, x0, ya, yb, yc, y0);
        let rezult2 = (x0-xPointCircle)**2+(y0-yPointCircle)**2<=radiusCircle**2;
        if (rezult1 || rezult2) {
            console.log(`Poin included in Triangle = ${'True'}`);
        } else {
            console.log(`Poin included in Triangle = ${'False'}`);
        }

    }

    function includedInTriangle(xa, xb, xc, x0, ya, yb, yc, y0) {
        let z1 = (xa - x0) * (yb - ya) - (xb - xa) * (ya - y0);
        let z2 = (xb - x0) * (yc - yb) - (xc - xb) * (yb - y0);
        let z3 = (xc - x0) * (ya - yc) - (xa - xc) * (yc - y0);
        if ((z1 >= 0 && z2 >= 0 && z3 >= 0) || (z1 < 0 && z2 < 0 && z3 < 0)) {
            return true;
        } else {
            return false;
        }
    }
}
{
    console.log(`Task №3`);

    let dayTheWeek = prompt("Number day the week =");
    switch (dayTheWeek) {
        case '1' :
            console.log("Monday");
            break;
        case '2' :
            console.log("Tuesday");
            break;
        case '3' :
            console.log("Wednesday");
            break;
        case '4' :
            console.log("Thursday");
            break;
        case '5' :
            console.log("Friday");
            break;
        case '6' :
            console.log("Saturday");
            break;
        case '7' :
            console.log("Sunday");
            break;
        default:
            console.log("Mistake. The value is entered incorrectly!");
    }
}
{
    console.log(`Task №4 and №5`);

    let x0 = prompt("Enter a number a =");
    let y0 = prompt("Enter a number b =");

    if (x0 > y0) {
        console.log("Increasing number a!");
    } else if (x0 < y0) {
        console.log("Increasing number b!");
    } else if (x0 === y0) {
        console.log("The numbers are equal");
    } else console.log("Mistake. The value is entered incorrectly!");
}
{
    console.log(`Task №6`);

    let x0 = prompt("Enter a number flat =");


    if (x0 >= 1 && x0 <= 20) {
        console.log("The room entrance 1!");
    } else if (x0 >= 21 && x0 <= 48) {
        console.log("The room entrance 2");
    } else if (x0 >= 49 && x0 <= 90) {
        console.log("The room entrance 3");
    } else console.log("Mistake. There is no such entrance!");
}
{
    console.log(`Task №7`);

    let name = ['ivan', 'alex', 'petr'];
    let password = ['334455', '777', 'b5678'];
    let rezult = `Input error!`;

    let inputName = prompt("Name:");
    let inputPassword = prompt("Password");

    for (let i = 0; i < name.length; i++) {
        if (name[i] === inputName) {
            if (password[i] === inputPassword) {
                rezult =`Welcome ${name[i]}!`;
                break;
            }
        }else {
            continue;
        }
    }

    alert(rezult);
}
{
    console.log(`Task №8`);

    var date = new Date();
    let inputAge = prompt("Your year of birth?");

    console.log(date.getFullYear());
    if (inputAge > date.getFullYear() || inputAge < 1919) {
        alert(`Year of birth entered incorrectly. Try again.`);
    } else {
        if ((date.getFullYear() - inputAge) >= 16) {
            alert(`Welcome!`);
        } else {
            alert(`No entry!`);
        }
    }
}
{
    console.log(`Task №9`);

    let allowance = '0';
    let inputExperience = prompt("Enter your work experience.");

    if (inputExperience >= 0 && inputExperience < 3) {
        allowance = 0;
    } else if (inputExperience >= 3 && inputExperience < 10) {
        allowance = 10;
    } else if (inputExperience >= 10 && inputExperience < 20) {
        allowance = 20;
    } else if (inputExperience >= 20) {
        allowance = 25;
    } else {
        alert("The data entered is incorrect.");
    }
    alert(`Allowance ${allowance}%`);

}
{
    console.log(`Task №10`);

    let inputExperience = prompt("Enter your work experience.");
    for (let i = 0; i < inputExperience.length; i++) {
        if ((inputExperience[i]==='.')|| (inputExperience[i]===',')){
            console.log(inputExperience[i-1]);
            break;
        }
    }


    inputExperience = inputExperience.replace(',', '.');
    inputExperience = inputExperience.substr(0, inputExperience.indexOf('.'));
    //  inputExperience=inputExperience/100;
    console.log(inputExperience);

}