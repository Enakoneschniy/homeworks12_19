// Task_01 Вывести числа от 4 до 400 на экран.
console.log('-----task_01-----');
let num1 = 1;
while (num1 <=400) {
    console.log(num1++);
}

// Task_02 Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
console.log('-----task_02-----');
for(let num2 = 4; num2 <= 13; num2 = num2 + 3) {
    console.log(num2);
}

// Task_03 Вывести числа 654 653 652 до нуля.
console.log('-----task_03-----');

for(let num3 = 654; num3 >=0; num3--) {
    console.log(num3);
}

// Task_04 Вывести все годы с 1983 до 2017

console.log('-----task_04-----');
for(let num4 = 1983; num4 <= 2017; num4++) {
    console.log(num4);
}

// Task_05 Вывести числа -4 -2 0 2 4 6 ...100.
console.log('-----task_05-----');
for(let num5 = -4; num5 <= 100; num5 = num5 + 2) {
    console.log(num5);
}

// Task_06 С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
console.log('-----task_06-----');
for(let num6 = 1; num6 <= 9; num6++) {
        console.log(num6*7);
}

// Task_07 Выведите с помощью цикла коды спецсимволов от 1000 до 2000.
// Напомню, что спецсимвол получается комбинацией &#число; Например ӆ
console.log('-----task_07-----');

for(let num7 = 1000; num7 <= 2000; num7++) {
    console.log(String.fromCharCode(num7));
}

// Task_08 Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).
console.log('-----task_08-----');
let sum8 = 0;
for(let num8 = 0; num8 <= 100; num8++) {
   sum8 = sum8 + num8;
}
console.log(sum8);

// Task_09 С помощью цикла вывести произведение чисел от 1 до 50.
console.log('-----task_09-----');

let multi9 = 1;
for(let num9 = 1; num9 <= 50; num9++) {
    multi9 = multi9 * num9;
}
console.log(multi9);

// Task_10 Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// Длину массива вводить через prompt.
console.log('-----task_10-----');

let arr10 = [];
let arr10Length = prompt('Введите длинну массива', 3);
for(let i = 1; i <= arr10Length; i++) {
    let str10 = '';
    for(let j = 1; j <= i; j++) {
        str10 = str10.concat('x');
    }
    arr10.push(str10);
}
console.log(arr10);


// Task_11 Заполните массив следующим образом: в первый элемент запишите '1',
// во второй '22', в третий '333' и так далее.
// Длину массива вводить через prompt.

console.log('-----task_11-----');

let arr11 = [];
let arr11Length = prompt('Введите длинну масссива', 3);

for(let i = 1; i <= arr11Length; i++) {
    let str11 = i.toString();
    for(let j = 2; j <= i; j++) {
        str11 = str11.concat(i.toString());
    }
    arr11.push(str11);
}
console.log(arr11);

// Task_12 Дан массив с числами. Узнайте сколько элементов с начала
// массива надо сложить, чтобы в сумме получилось больше 10-ти.
console.log('-----task_12-----');
let arr12 = [1, 2, 1, 0, 0, 0, 0, 0, 1, 1];
let sum12 = 0;


for (let i = 0; i < arr12.length; i++) {
    sum12 += arr12[i];
}
console.log(sum12);
if (sum12 <= 10) {
    alert('Сумма меньше 10, недостаточно элементов');
} else {
    alert('Сумма больше 10');
    // arr12.pop();
}
console.log(arr12);

// Task_13 Дан массив с числами.
// Не используя метода reverse переверните его элементы в обратном порядке.
console.log('-----task_13-----');

let arr13 = [0, 1, 2, 3, 4, 5, 6, 7];

arr13.sort((a, b) => b - a);
console.log(arr13);

// Task_14 Дан массив с числами.
// Запишите в новый массив только те числа,
// которые больше нуля и меньше 10-ти.
console.log('-----task_14-----');
let arr14 = [-3, 16, 33, 4, 7, 8, 100];
let arr14New = arr14.filter(elem => elem > 0 && elem < 10);
console.log(arr14New);

// Task_15 Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел.
console.log('-----task_15-----');
let arr15 = [235, 19, 345, 234, 66, 8, 100];
let arr15New = arr15.filter(elem => elem % 2 == 0);
console.log(arr15New);


// Task_16 Дан массив [1, 2, 3, 4, 5, 6].
// Сделать из него массив [2, 1, 4, 3, 6, 5]
console.log('-----task_16-----');

let arr16 = [1, 2, 3, 4, 5, 6];

[arr16[0], arr16[1]] = [arr16[1], arr16[0]];
[arr16[2], arr16[3]] = [arr16[3], arr16[2]];
[arr16[4], arr16[5]] = [arr16[5], arr16[4]];
console.log(arr16);

// Task_17 Дан массив [1, 2, 3, 4, 5, 6].
// Сделать из него массив [5, 6, 3, 4, 1, 2]
console.log('-----task_17-----');

let arr17 = [1, 2, 3, 4, 5, 6];
[arr17[0], arr17[4]] = [arr17[4], arr17[0]];
[arr17[1], arr17[5]] = [arr17[5], arr17[1]];
console.log(arr17);

// Task_18 Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
// Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.
console.log('-----task_18-----');

let arr18 = [[1, 2, 3], [4, 5], [6]];
let sum18 = 0;
for (let i = 0; i < arr18.length; i++) {
    sum18 += arr18[i];
}

console.log(sum18);