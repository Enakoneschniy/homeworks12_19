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

// Task_10 Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.
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


// Task_11 Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.



