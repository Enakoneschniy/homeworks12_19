
let Input = () => {
    const x = parseFloat(prompt('Введи x'));
    console.log("x = " + x);
    const y = parseFloat(prompt('Введи y'));
    console.log('y = ' + y);
    return {x, y}
}


let Choise = () => {
    let NumOfChoise = parseInt(prompt('Выбери № картинки или любое значение чтобы закончить работу'))
    if (NumOfChoise == 1) {
        Image1();
    }
    else if (NumOfChoise == 2){
        Image2();
    }
    else if (NumOfChoise == 3){
        Image3();
    }
    else {
        alert('Такой картинки нет')
    }

}
let Image2 = () => {
    const {x,y} = Input();
    const check = (y >= 0 && y <= 1)
        && ((x <= 0 && y >= -x)
            || (x >= 0 && y <= x))
        || ((y <= 0 && y >= -1)
            && ((x <= 0 && y <= x)
                || (x >= 0 && y <= -x)));
    check ? alert('Входит') : alert('Не входит')
    Choise();
}


let Image3 = () => {
    const {x, y} = Input();
    const check = y >= 0 && y <= (1 - x ** 2) ** 0.5
        || y <= 0 && y >= -((1 - x ** 2) ** 0.5)
        || x < 0 && y < 0 && y >= -2 - x;
    check ? alert('Входит')  : alert('Не входит');
    Choise();
}

let Image1 = () => {
    const {x, y} = Input()
    const check = y >= 0 && ((x <= 0 && y <= x + 4) || (x >= 0 && y <= 4 - x))
    check ? alert('Входит') : alert('Не выходит')
    Choise();
}
Choise();
