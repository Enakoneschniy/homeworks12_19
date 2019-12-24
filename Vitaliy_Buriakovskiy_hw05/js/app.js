{
    console.log(`Task №1 (Рекурсия)-------------------------------------------------------------------`);
    console.log("Дано натуральное число n. Выведите все числа от 1 до n.");

    let a = 1;
    let b = 20; //prompt("Enter the number B", 0);

    console.log(seq(a, b));

}
{
    console.log(`Task №2 (Рекурсия)-------------------------------------------------------------------`);
    console.log("Даны два целых числа A и В (каждое в отдельной строке). Выведите все числа\n" +
        "от A до B включительно, в порядке возрастания, если A < B, или в порядке\n" +
        "убывания в противном случае.");

    let a = 5; //prompt("Enter the number A", 0);
    let b = 20; //prompt("Enter the number B", 0);

    console.log(seq(a, b));
}
{
    console.log(`Task №3 (Рекурсия)-------------------------------------------------------------------`);
    console.log("Дано натуральное число N. Вычислите сумму его цифр." +
        "При решении этой задачи нельзя использовать строки, списки, массивы (ну и" +
        "циклы, разумеется).");

    let a = 578; //prompt("Enter the number A", 0);

    let frml = (a, result) =>{return  Number(result) + a % 10;};

    console.log(decomp(a, frml));
}
{
    console.log(`Task №4 (Рекурсия)-------------------------------------------------------------------`);
    console.log("Дано натуральное число N. Выведите все его цифры по одной, в обратном\n" +
        "порядке, разделяя их пробелами или новыми строками.\n" +
        "При решении этой задачи нельзя использовать строки, списки, массивы (ну и\n" +
        "циклы, разумеется). Разрешена только рекурсия и целочисленная арифметика.");

    let a = 578; //prompt("Enter the number A", 0);

    let frml = (a, result) =>{return  result + `${a % 10} `;};

    console.log(decomp(a, frml));
}
{
    console.log(`Task №5 (Рекурсия)-------------------------------------------------------------------`);
    console.log("Дано натуральное число N. Выведите все его цифры по одной, в обычном\n" +
        "порядке, разделяя их пробелами или новыми строками.\n" +
        "При решении этой задачи нельзя использовать строки, списки, массивы (ну и\n" +
        "циклы, разумеется). Разрешена только рекурсия и целочисленная арифметика.");

    let a = 578; //prompt("Enter the number A", 0);
    let frml = (a, result) =>{return  `${a % 10} ` + result;};

    console.log(decomp(a, frml));
}
{
    console.log(`Task №6 (ООП)-------------------------------------------------------------------`);
    console.log("OOП - не делаем");

}
{
    console.log(`Task №7 (ООП)-------------------------------------------------------------------`);
    console.log("OOП - не делаем");

}
{
    console.log(`Task №8-------------------------------------------------------------------`);
    console.log("OOП - не делаем");

}
{
    console.log(`Task №9 (ООП)-------------------------------------------------------------------`);
    console.log("OOП - не делаем");

}
{
    console.log(`Task №10 (ООП)-------------------------------------------------------------------`);
    console.log("OOП - не делаем");

}
{
    console.log(`Task №11 (ООП)-------------------------------------------------------------------`);
    console.log("OOП - не делаем");

}
{
    console.log(`Task №12-------------------------------------------------------------------`);
    console.log("Даны два массива: ['a', 'b', 'c'] и [1, 2, 3] . Объедините их вместе.");

        let arrA=['a', 'b', 'c'];
        let arrB=[1, 2, 3];

        function arr(arrA, arrB) {
            return [arrA, arrB];
        }

        console.log(arr(arrA,arrB).toLocaleString());
}
{
    console.log(`Task №13-------------------------------------------------------------------`);
    console.log("Дан массив ['a', 'b', 'c'] . Добавьте ему в конец элементы 1, 2, 3 .");

    let arrA=['a', 'b', 'c'];

    function arr(arrA, ...b) {
        return [arrA, ...b];
    }

    console.log(arr(arrA,1,2,3).toLocaleString());
}
{
    console.log(`Task №14-------------------------------------------------------------------`);
    console.log("Дан массив [1, 2, 3] . Добавьте ему в начало элементы 4, 5, 6 .");

    let arrA=[1, 2, 3];

    function arr(arrA, ...b) {
        return [...b, arrA];
    }

    console.log(arr(arrA, 4,5,6).toLocaleString());
}
{
    console.log(`Task №15-------------------------------------------------------------------`);
    console.log("Дан массив [1, 2, 3, 4, 5] . С помощью метода slice запишите в новый элементы [1,\n" +
        "2, 3] .");

    let arrA=[1, 2, 3, 4, 5];

    function arr(arrA) {
        return arrA.slice(0,3);
    }

    console.log(arr(arrA).toLocaleString());
}
{
    console.log(`Task №16-------------------------------------------------------------------`);
    console.log("Дан массив [1, 2, 3, 4, 5] . С помощью метода slice запишите в новый элементы [4,\n" +
        "5] .");

    let arrA=[1, 2, 3, 4, 5];

    function arr(arrA) {
        return arrA.slice(3,5);
    }

    console.log(arr(arrA).toLocaleString());
}
{
    console.log(`Task №17-------------------------------------------------------------------`);
    console.log("Дан массив [1, 2, 3, 4, 5] . С помощью метода splice преобразуйте массив в [1, 4, 5] .");

    let arrA=[1, 2, 3, 4, 5];

    function arr(arrA) {
       arrA.splice(1,2);
       return arrA;
    }

     console.log(arr(arrA).toLocaleString());
}
{
    console.log(`Task №18-------------------------------------------------------------------`);
    console.log("Дан массив [1, 2, 3, 4, 5] . С помощью метода splice запишите в новый массив\n" +
        "элементы [2, 3, 4] .");

    let arrA=[1, 2, 3, 4, 5];

    function arr(arrA) {
        return arrA.splice(1,3);
    }

    console.log(arr(arrA).toLocaleString());
}
{
    console.log(`Task №19-------------------------------------------------------------------`);
    console.log("Дан массив [1, 2, 3, 4, 5] . С помощью метода splice сделайте из него массив [1, 2,\n" +
        "3, 'a', 'b', 'c', 4, 5]");

    let arrA=[1, 2, 3, 4, 5];

    function arr(arrA, ...b) {
        return [arrA.splice(0,3), ...b, arrA.splice(0,2)];
    }

    console.log(arr(arrA, 'a', 'b', 'c').toLocaleString());
}
{
    console.log(`Task №20-------------------------------------------------------------------`);
    console.log("Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a',\n" +
        "'b', 2, 3, 4, 'c', 5, 'e'].");

    let arrA=[1, 2, 3, 4, 5];

    function arr(arrA, ...b) {
        return [arrA.splice(0,1)
            , ...b.splice(0,2)
            , arrA.splice(0,3)
            , ...b.splice(0,1)
            , arrA.splice(0,1)
            , ...b.splice(0,1)];
    }

    console.log(arr(arrA, 'a', 'b', 'c', 'e').toLocaleString());
}
{
    console.log(`Task №21-------------------------------------------------------------------`);
    console.log("Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.");

    const obj =
        {
            js: 'test',
            jq: 'hello',
            css: 'world'
        };
    let arr = [];

    for (let key in obj){arr[arr.length]=key;}

    console.log(arr.toLocaleString());

}
{
    console.log(`Task №22 (ООП)-------------------------------------------------------------------`);
    console.log("OOП - не делаем");

}
