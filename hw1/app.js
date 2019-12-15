function runTask1() {
    let x
    const a = +prompt('Enter a:'),
        b = +prompt('Enter b:')

    if (a > b) {
        x = a + b / 2 * 4
        alert(x)
    }
    else if (a === b) {
        x = 400
        alert(x)
    }
    else {
        x = a - b + 2 / b * 4
        alert(x)
    }
}

function runFirstTaskInTask2() {
    const userXCoords = prompt('Enter X coords:'),
        userYCoords = prompt('Enter Y coords:'),
        minXCoords = -4,
        maxXCoords = 4,
        minYCoords = 0,
        maxYCoords = 3

    if (userXCoords >= minXCoords
        && userXCoords <= maxXCoords
        && userYCoords >= minYCoords
        && userXCoords <= maxYCoords) {
        alert('The point is in the zone!')
    }
    else {
        alert('The point is NOT in the zone!')
    }
}

function runSecondTaskInTask2() {
    const userXCoords = prompt('Enter X coords:'),
        userYCoords = prompt('Enter Y coords:'),
        minXCoords = -1,
        maxXCoords = 1,
        minYCoords = -1,
        maxYCoords = 1

    if (userXCoords == 0
        && userYCoords >= minYCoords
        && userYCoords <= maxYCoords
        || userYCoords == 0
        && userXCoords >= minXCoords
        && userXCoords <= maxXCoords) {

        alert('The point is in the zone!')
    }
    else if (Math.abs(userXCoords) == Math.abs(userYCoords)
        && userXCoords >= minXCoords
        && userXCoords <= maxXCoords
        && userYCoords >= minYCoords
        && userYCoords <= maxYCoords) {

        alert('The point is in the zone!')
    }
    else {
        alert('The point is NOT in the zone!')
    }

}

function runThirdTaskInTask2() {

    const userXCoords = prompt('Enter X coords:'),
        userYCoords = prompt('Enter Y coords:'),
        minXCoords = -2,
        minYCoords = -2,
        radius = 1

    if (radius ** 2 <= userXCoords ** 2 + userYCoords ** 2) {

        alert('The point is in the zone!')

    }
    else if (userXCoords < 0 && userXCoords >= minXCoords
        && userYCoords < 0 && userYCoords >= minYCoords) {

        alert('The point is in the zone!')
    }
    else {
        alert('The point is NOT in the zone!')
    }
}


function runTask3() {

    const dayNumber = +prompt('Enter day number:')

    switch (dayNumber) {

        case 1:
            alert('Monday')
            break;

        case 2:
            alert('Tuesday')
            break;

        case 3:
            alert('Wednesday')
            break;

        case 4:
            alert('Thursday')
            break;

        case 5:
            alert('Friday')
            break;

        case 6:
            alert('Saturday')
            break;

        case 7:
            alert('Sunday')
            break;

        default:
            alert("This day doesn't exist!")
            break;
    }

}

function runTask4() {

    const firstNum = prompt('Enter the first number:'),
        secondNum = prompt('Enter the second number')

    if (firstNum > secondNum) {

        alert(`Max number: ${firstNum}`)

    }
    else {

        alert(`Max number: ${secondNum}`)

    }
}

function runTask5() {

    const firstNum = prompt('Enter the first number:'),
        secondNum = prompt('Enter the second number')

    if (firstNum > secondNum) {

        alert(`Max number: ${firstNum}`)

    }
    else if (secondNum > firstNum) {

        alert(`Max number: ${secondNum}`)

    }
    else {

        alert('Numbers are equal!')
    }
}

function runTask6() {

    const userNumber = prompt('Enter flat number'),
        firstFlat = 1,
        lastFlatInFirstPorch = 20,
        lastFlatInSecondPorch = 48,
        lastFlatInThirdPorch = 90

    if (userNumber > lastFlatInThirdPorch
        || userNumber < firstFlat) {

        alert('This flat is NOT in this house!')

    }
    else if (userNumber > lastFlatInSecondPorch) {

        alert('This flat is in the THIRD porch!')
    }

    else if (userNumber > lastFlatInFirstPorch) {

        alert('This flat is in the SECOND porch!')

    }

    else if (userNumber >= firstFlat) {

        alert('This flat is in the FIRST porch!')

    }

    else {

        alert('This is probably not a flat...')

    }

}

function runTask7() {

    const userLogin = prompt('Enter your login:'),
        userPass = prompt('Enter your password:'),
        firstLogin = 'ivan',
        firstPass = '334455',
        secondLogin = 'alex',
        secondPass = '777',
        thirdLogin = 'petr',
        thirdPass = 'b5678'

    if (userLogin == firstLogin
        && userPass == firstPass) {

        alert(`Welcome, ${firstLogin}`)

    }
    else if (userLogin == secondLogin
        && userPass == secondPass) {

        alert(`Welcome, ${secondLogin}`)

    }

    else if (userLogin == thirdLogin
        && userPass == thirdPass) {

        alert(`Welcome, ${thirdLogin}`)

    }
    else {

        alert('Login failed')

    }

}

function runTask8() {

    let usersYearOfBirth = prompt('Enter the year of your birth:')
    const currentYear = 2019,
        possibleAge = 16
     
    if (currentYear - usersYearOfBirth >= possibleAge) {

        alert('Welcome!')

    }
    else {

        alert('Access denied!')

    }

}

function runTask9() {

    const userExperience = +prompt('Enter amount years of your experience:'),
        firstBonus = '0%',
        secondBonus = '10%',
        thirdBonus = '20%',
        fourthBonus = '25%'
    maxYearsForFirstBonus = 3,
        maxYearsForSecondBonus = 10,
        maxYearsForThirdBonus = 20

    if (userExperience > maxYearsForThirdBonus) {

        alert(`Congratulations! You have ${fourthBonus} bonus!`)

    }
    else if (userExperience > maxYearsForSecondBonus) {

        alert(`Congratulations! You have ${thirdBonus} bonus!`)

    }
    else if (userExperience > maxYearsForFirstBonus) {

        alert(`Congratulations! You have ${secondBonus} bonus!`)

    }

    else {

        alert(`Unfortunately, you have ${firstBonus} bonus :(`)

    }

}