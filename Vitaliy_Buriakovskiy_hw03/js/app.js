{
    console.log(`Task №1`);
    console.log("Вывести числа от 4 до 400 на экран.");

    let result = "";
    for (let i = 4; i <= 400; i++) {
        result += i + ' ';
    }

    console.log(result);
}
{
    console.log(`Task №2`);
    console.log("Вывести числа в последовательности: 4 7 10 13 с помощью цикла.");

    let result = "";
    for (let i = 4; i <= 13; i += 3) {
        result += i + ' ';
    }

    console.log(result);
}
{
    console.log(`Task №3`);
    console.log("Вывести числа 654 653 652 до нуля.");

    let result = "";
    for (let i = 654; i >= 0; i--) {
        result += i + ' ';
    }

    console.log(result);
}
{
    console.log(`Task №4`);
    console.log("Вывести все годы с 1983 до 2017.");

    let result = "";
    for (let i = 1983; i <= 2017; i++) {
        result += i + ' ';
    }

    console.log(result);
}
{
    console.log(`Task №5`);
    console.log("Вывести числа -4 -2 0 2 4 6 ...100.");

    let result = "";
    for (let i = -4; i <= 100; i += 2) {
        result += i + ' ';
    }

    console.log(result);
}
{
    console.log(`Task №6`);
    console.log("С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.");

    let result = "";
    for (let i = 1; i <= 9; i++) {
        result += `7 * ${i} = ${7 * i} \n`;
    }

    console.log(result);
}
{
    console.log(`Task №7`);
    console.log("Выведите с помощью цикла коды спецсимволов от 1000 до 2000. " +
        "Напомню, что спецсимвол получается комбинацией &#число; Например ?");

    let result = "";

    for (let i = 1000; i <= 2000; i++) {
        result += `&#${i} `;
    }
    console.log(result);
}
{
    console.log(`Task №8`);
    console.log("Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).");

    let result = 0;
    for (let i = 0; i <= 100; i++) {
        result += i;
    }

    console.log(result);
}
{
    console.log(`Task №9`);
    console.log("С помощью цикла вывести произведение чисел от 1 до 50.");

    let result = 1;
    for (let i = 1; i < 50; i++) {
        result *= i;
    }

    console.log(result);
}
{
    console.log(`Task №10`);
    console.log("Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее. " +
        "Длину массива вводить через prompt.");

    let arrayResult = [];
    let inputArrayLenght = 5;// prompt("Enter the length of the array.");

    {
        let s = 'x';
        while (inputArrayLenght--) {
            arrayResult.push(s);
            s += 'x';
        }
    }
    console.log(arrayResult.toLocaleString());
}
{
    console.log(`Task №11`);
    console.log("Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее. " +
        "Длину массива вводить через prompt.");

    let arrayResult = [];
    let inputArrayLenght = 5;// prompt("Enter the length of the array.");

    {
        let s = "";
        for (let i = 1; i <= inputArrayLenght; i++) {
            for (let j = 0; j < i; j++) s += i;
            arrayResult.push(s);
            s = "";
        }
    }

    console.log(arrayResult.toLocaleString());
}
{
    console.log(`Task №12`);
    console.log("Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.");

    let numbers = [2, 6, 1, 0, 8, 4, 6, 8, 7, 3];
    let result;

    let sum = 0;
    for (let index in numbers) {
        sum += numbers[index];
        if (sum > 10) {
            result = Number(index) + 1;
            break;
        }
    }

    console.log(result);
}
{
    console.log(`Task №13`);
    console.log("Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.");

    let numbers = [2, 6, 1, 0, 8, 4, 6, 8, 7, 3, 5];
    let result;

    for (let i = 0; i < numbers.length / 2; i++) {
        [numbers[i], numbers[numbers.length - 1 - i]] = [numbers[numbers.length - 1 - i], numbers[i]];
    }

    console.log(numbers.toLocaleString());
}
{
    console.log(`Task №14`);
    console.log("Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.");

    let numbers = [2, 6, 1, 0, 8, 50, 4, 6, 8, 7, 3, 5, 10];
    let result = [];

    for (let number of numbers) {
        if (number > 0 && number < 10) result.push(number);
    }

    console.log(result.toLocaleString());
}
{
    console.log(`Task №15`);
    console.log("Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.");

    let numbers = [2, 6, 1, 0, 8, 50, 4, 6, 8, 7, 3, 5, 10];
    let result = [];

    for (let number of numbers) {
        if (number % 2 === 0) result.push(number);
    }

    console.log(result.toLocaleString());
}
{
    console.log(`Task №16`);
    console.log("Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]");

    let numbers = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i < numbers.length; i += 2) {
        if ((i + 1) < numbers.length) {
            [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        }
    }

    console.log(numbers.toLocaleString());
}
{
    console.log(`Task №17`);
    console.log("Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2]");

    let numbers = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i < numbers.length; i += 2) {
        if ((i + 1) < numbers.length) {
            [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        }
    }
    for (let i = 0; i < numbers.length / 2; i += 2) {
        [numbers[i], numbers[numbers.length - 1 - (i + 0)]] = [numbers[numbers.length - 1 - (i + 0)], numbers[i]];
        [numbers[i + 1], numbers[numbers.length - 1 - (i + 1)]] = [numbers[numbers.length - 1 - (i + 1)], numbers[i + 1]];
    }

    console.log(numbers.toLocaleString());
}
{
    console.log(`Task №18`);
    console.log("Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. " +
        "Массив, конечно же, может быть произвольным.");

    let numbers = [[1, 2, 3], [4, 5], [6]];
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i].length; j++) {
            result += numbers[i][j];
        }
    }

    console.log(result);
}
{
    console.log(`Task №19_1`);
    console.log("Сформировать 3 матрицы изображенные на картинке");

    let arreyResult = [[]];

    for (let i = 1; i <= 10; i++) {
        arreyResult[i - 1] = [[]];
        for (let j = 1; j <= 10; j++) {
            arreyResult[i - 1][j - 1] = (i * j);
        }
    }

    for (let i = 0; i < arreyResult.length; i++) {
        console.log(arreyResult[i].toLocaleString());
    }
}
{
    console.log(`Task №19_2`);
    console.log("Сформировать 3 матрицы изображенные на картинке");

    let arreyResult = [[]];

    let arrayLenghtX = 10;
    let arrayLenghtY = 10;
    for (let i = 1; i <= arrayLenghtX; i++) {
        arreyResult[i - 1] = [[]];
        for (let j = 1; j <= arrayLenghtY; j++) {
            if (i === j) {
                arreyResult[i - 1][j - 1] = 1;
            } else if (i === (arrayLenghtY - j + 1)) {
                arreyResult[i - 1][j - 1] = 2;
            } else if (i > (arrayLenghtY - j + 1) && i < j) {
                arreyResult[i - 1][j - 1] = 4;
            } else if (i > (arrayLenghtY - j + 1) && i > j) {
                arreyResult[i - 1][j - 1] = 5;
            } else if (i < (arrayLenghtY - j + 1) && i < j) {
                arreyResult[i - 1][j - 1] = 3;
            } else if (i < (arrayLenghtY - j + 1) && i > j) {
                arreyResult[i - 1][j - 1] = 6;
            }
        }
    }

    for (let i = 0; i < arreyResult.length; i++) {
        console.log(arreyResult[i].toLocaleString());
    }
}
{
    console.log(`Task №19_3`);
    console.log("Сформировать 3 матрицы изображенные на картинке");

    let arreyResult = [[1]];

    let arrayLenghtX = 0;
    let arrayLenghtY = 10;
    for (let i = 0; i <= arrayLenghtY; i++) {
        arreyResult[i] = [[]];
        for (let j = 0; j <= arrayLenghtX + i - 1; j++) {
            if (j === 0 || j === arrayLenghtX + i - 1) {
                arreyResult[i][j] = 1;
            } else {
                arreyResult[i][j] = arreyResult[i - 1][j - 1] + arreyResult[i - 1][j];
            }
        }
    }

    for (let i = 0; i < arreyResult.length; i++) {
        console.log(arreyResult[i].toLocaleString());
    }
}