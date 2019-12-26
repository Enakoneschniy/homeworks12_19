// task 1
let result;

function task1() {

    let a = parseFloat(prompt(`Введите число a`)),
        b = parseFloat(prompt(`Введите число b`));

    if (a > b) {
        x = a + b / 2 * 4;
    } else if (a === b) {
        x = 400;
    } else if (a < b) {
        x = a - b + 2 / b * 4;
    }

    result = x;

    return document.getElementById("resultIntput").value = result;

}

//task 2
function task2firstImage() {

    let x = parseFloat(prompt(`Введите координату по оси x`)),
        y = parseFloat(prompt(`Введите координату по оси y`));

    result = `Точка НЕ попадает в область`;

    if (y >= 0 && (x <= 0 && y <= x + 4) || (x >= 0 && y <= 4 - x)) {
        result = `Точка попадает в область`;
    }

    return document.getElementById("resultIntput").value = result;

}

function task2secondImage() {

    let x = parseFloat(prompt(`Введите координату по оси x`)),
        y = parseFloat(prompt(`Введите координату по оси y`));

    result = `Точка НЕ попадает в область`;

    if ((y >= 0 && y >= x && y >= -x && y <= 1) || (y <= 0 && y <= x && y <= -x && y >= -1)) {
        result = `Точка попадает в область`;
    }

    return document.getElementById("resultIntput").value = result;

}

function task2thirdImage() {

    let x = parseFloat(prompt(`Введите координату по оси x`));
    let y = parseFloat(prompt(`Введите координату по оси y`));

    result = `Точка НЕ попадает в область`;

    if ((x * x + y * y <= 1) || (x <= 0 && y <= 0 && y >= -x - 2)) {
        result = `Точка попадает в область`;
    }

    return document.getElementById("resultIntput").value = result;

}


// task 3
function task3() {

    let day = parseFloat(prompt('Введите номер дня недели'));

    switch (day) {
        case 1:
            alert(`Понедельник`);
            break;
        case 2:
            alert(`Вторник`);
            break;
        case 3:
            alert(`Среда`);
            break;
        case 4:
            alert(`Четверг`);
            break;
        case 5:
            alert(`Пятница`);
            break;
        case 6:
            alert(`Суббота`);
            break;
        case 7:
            alert(`Воскресенье`);
            break;
        default:
            alert(`Такого дня недели не существует!`);
    }

}

// task 4
function task4() {

    let a = prompt(`Введите число a`),
        b = prompt(`Введите число b`);


    (a > b) ? result = `a больше b` : result = `a меньше b`;

    return document.getElementById("resultIntput").value = result;

}

// task 5
function task5() {

    let a = prompt(`Введите число a`),
        b = prompt(`Введите число b`);

    if (a === b) {
        result = `Они равны`;
    } else {
        (a > b) ? result = `a больше b` : result = `a меньше b`;
    }

    return document.getElementById("resultIntput").value = result;

}

// task 6
function task6() {

    let roomNumber = parseFloat(prompt(`Введите номер квартиры`));
    result = `Здесь такой квартиры нет`;

    if (roomNumber >= 1 && roomNumber <= 20) {
        result = `Первый подъезд`;
    } else if (roomNumber >= 21 && roomNumber <= 48) {
        result = `Второй подъезд`;
    } else if (roomNumber >= 49 && roomNumber <= 90) {
        result = `Второй подъезд`;
    }

    return document.getElementById("resultIntput").value = result;

}

// task 7
function task7() {

    let login = prompt(`Введите login`);
    let password = prompt(`Введите пароль`);
    result = `Ошибка входа`;

    if ((login === `ivan` && password === `334455`) || (login === `alex` && password === `777`) || (login === `petr` && password === `b5678`)) {
        result = `Добро пожаловать`;
    }

    return document.getElementById("resultIntput").value = result;

}

// task 8
function task8() {

    let dateOfBirth = parseFloat(prompt(`Ведите свой год рождения`));
    let currentDate = new Date().getFullYear();
    result = `Вход воспрещен`;

    alert(dateOfBirth);

    if (currentDate - dateOfBirth >= 16) {
        result = `Добро пожаловать`;
    }

    return document.getElementById("resultIntput").value = result;

}

// task 9
function task9() {

    let workExpirience = parseFloat(prompt(`Введите стаж работы`));

    if (workExpirience >= 0 && workExpirience <= 3) {
        result = `0%`;
    } else if (workExpirience > 3 && workExpirience <= 10) {
        result = `10%`;
    } else if (workExpirience > 10 && workExpirience <= 20) {
        result = `20%`;
    } else if (workExpirience > 20) {
        result = `25%`;
    }

    return document.getElementById("resultIntput").value = result;

}

// task 10
function task10() {

    let col = prompt(`Введите количество товаров`);
    result = `${col} Товаров`;

    if ((col >= `10` && col <= `14`) || (col.slice(-2) >= `10` && col.slice(-2) <= `14`)) {
        return document.getElementById("resultIntput").value = result;
    }
    if (col === `1` || col.slice(-1) === `1`) {
        result = `${col} Товар`;
    } else if ((col === `2` && col === `3` && col === `4`) || (col.slice(-1) >= `2` && col.slice(-1) <= `4`)) {
        result = `${col} Товара`;
    }

    return document.getElementById("resultIntput").value = result;

}

// task 11
function task11() {

    let money = 200,
        age,
        productName,
        buy = document.getElementById("buy"),
        endBuy = document.getElementById("endBuy").onclick = function () {
            alert(`Спасибо за покупку, заходите еще`);
        };

    document.getElementById("money").value = money;

    alert(`Добро пожаловать. Чего желаете?`);

    buy.onclick = function () {
        productName = document.getElementById("productName").value;
        loop:
            if (money >= 8 || endBuy) {
                switch (productName) {
                    case `Сигареты`:
                        age = prompt(`Сколько вам лет?`);
                        if (money >= 40 && age >= 18) {
                            money -= 40;
                            alert(`Возьмите пожалуйста`);
                            document.getElementById("money").value = money;
                            document.getElementById("productName").value = ``;
                        } else {
                            (age <= 18) ? alert(`Вы еще несовершеннолетний`) : alert(`У Вас не достаточно денег`);
                        }
                        break;
                    case `Пиво`:
                        age = prompt(`Сколько вам лет?`);
                        if (money >= 15 && age >= 18) {
                            money -= 15;
                            alert(`Возьмите пожалуйста`);
                            document.getElementById("money").value = money;
                            document.getElementById("productName").value = ``;
                        } else {
                            (age <= 18) ? alert(`Вы еще несовершеннолетний`) : alert(`У Вас не достаточно денег`);
                        }
                        break;
                    case `Лимонад`:
                        money -= 8;
                        alert(`Возьмите пожалуйста`);
                        document.getElementById("money").value = money;
                        document.getElementById("productName").value = ``;
                        break;
                    case `Виски`:
                        age = prompt(`Сколько вам лет?`);
                        if (money >= 120 && age >= 21) {
                            money -= 120;
                            alert(`Возьмите пожалуйста`);
                            document.getElementById("money").value = money;
                            document.getElementById("productName").value = ``;
                        } else {
                            (age <= 18) ? alert(`Вы еще несовершеннолетний`) : alert(`У Вас не достаточно денег`);
                            document.getElementById("productName").value = ``;
                        }
                        break;
                    default:
                        alert(`Такого тавара нету`);
                        document.getElementById("productName").value = ``;
                }
                if (confirm(`Желаете чего нибудь еще?`)) {
                    document.getElementById("productName").value = ``;
                    break loop;
                }
                alert(`Спасибо за покупку, заходите еще`);
                document.getElementById("productName").value = ``;
                money = 200;
                document.getElementById("money").value = money;
            }
    }

}

// task 12
function task12() {

    const espresso = document.getElementById("espresso"),
        macchiato = document.getElementById("macchiato"),
        cappuccino = document.getElementById("cappuccino"),
        latte = document.getElementById("latte"),
        mocha = document.getElementById("mocha"),
        doppio = document.getElementById("doppio");

    espresso.onclick = function () {
        alert(`Возьмите Ваш эспрессо`);
    }

    macchiato.onclick = function () {
        alert(`Возьмите Ваше макиато`);
    }

    cappuccino.onclick = function () {
        alert(`Возьмите Ваш капучино`);
    }

    latte.onclick = function () {
        alert(`Возьмите Ваше латте`);
    }

    mocha.onclick = function () {
        alert(`Возьмите Ваш мокка`);
    }

    doppio.onclick = function () {
        alert(`Возьмите Ваш доппио`);
    }

}

// show block
function showTask11HiddenTask12() {

    document.getElementById("task11").style.display = "block";
    document.getElementById("result").style.display = "none";
    document.getElementById("task12").style.display = "none";

}

function showTask12HiddenTask11() {

    document.getElementById("task12").style.display = "block";
    document.getElementById("result").style.display = "none";
    document.getElementById("task11").style.display = "none";

}

function hiidenBlocksTask11_12() {

    document.getElementById("result").style.display = "block";
    document.getElementById("task11").style.display = "none";
    document.getElementById("task12").style.display = "none";

}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}