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


