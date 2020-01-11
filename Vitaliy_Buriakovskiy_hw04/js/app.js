{
    console.log(`Task №1-------------------------------------------------------------------`);
    console.log("Написать функцию которая первым принимает значение, которым заполнять массив, " +
        "а вторым - сколько элементов должно быть в массиве. " +
        "Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].");

    function arrayFill(data, lenght) {
        let arr = [];
        while (lenght--) arr[lenght] =data;
        
        return arr;
    }

    console.log(arrayFill('x',5).toLocaleString());
}
{
    console.log(`Task №2-------------------------------------------------------------------`);
    console.log("Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. " +
        "Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.");

    let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

    let sum = arr.reduce((resArr, currItem) => resArr.concat(currItem))
                      .reduce((resArr, currItem) => resArr.concat(currItem))
                      .reduce((sum, currItem) => sum + currItem);

    console.log(sum);
}
{
    console.log(`Task №3-------------------------------------------------------------------`);
    console.log("Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, " +
        "что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.");

    function isNumberInRange(num) {return (num > 0 && num < 10)}

    console.log(isNumberInRange(5));
}
{
    console.log(`Task №4-------------------------------------------------------------------`);
    console.log("Сделайте функцию isEven() (even - это четный), " +
        "которая параметром принимает целое число и проверяет: четное оно или нет. " +
        "Если четное - пусть функция возвращает true, если нечетное - false.");


        console.log(isEven(6));  //Look helpFunction
}
{
    console.log(`Task №5-------------------------------------------------------------------`);
    console.log("Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. " +
        "Для этого используйте вспомогательную функцию isEven из предыдущей задачи.");

    let arr = [1, 2, 3, 4, 5, 6, 7, 8];

    let arrEven = arr.filter(currItem => isEven(currItem));

    console.log(arrEven.toLocaleString());
}
{
    console.log(`Task №6-------------------------------------------------------------------`);
    console.log("Сделайте функцию getDivisors, которая параметром принимает число " +
        "и возвращает массив его делителей (чисел, на которое делится данное число).");

    function getDivisors(num) {
        let arr =[];

        for (let i = 2; i < num; i++) {
            if ((num/i)%1===0) arr[arr.length]=i;
        }
        return arr;
    }

    console.log(getDivisors(70).toLocaleString());
}
{
    console.log(`Task №7-------------------------------------------------------------------`);
    console.log("Создайте функцию, которая получает два параметра – число и степень числа. " +
        "Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.");

    function getInDegree(num, degree){ return num**degree;}

    console.log(getInDegree(2,3));
}
{
    console.log(`Task №8-------------------------------------------------------------------`);
    console.log("Функция принимает параметр - возраст пользователя. " +
        "Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.");

    printAgeControl(17); //Look helpFunction
}
{
    console.log(`Task №9-------------------------------------------------------------------`);
    console.log("Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. " +
        "В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида проверки наличия " +
        "аргумента – проверка на undefined и оператор ||.");

    function printAgeControlNew(age) {
        (!(1 <= age && age <= 100) || age === undefined) ? console.log("Введите возраст") : printAgeControl(age) ;
    }

         printAgeControlNew(0);
}
{
    console.log(`Task №10-------------------------------------------------------------------`);
    console.log("Создайте функцию, которая считает длину массива и возвращает ее в виде числа. " +
        "Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.");

    function countLenghtArr(...arg) {
       return (arg.length === 0) ?  "Error. Arg undefined." :  arg.length;
    }

    console.log(countLenghtArr(1, 5, 0, 9, 12, 7));
}
{
    console.log(`Task №11-------------------------------------------------------------------`);
    console.log("Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет, " +
        "что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8. " +
        "Реализуйте решение с несколькими return.");

    function getParser(num) {

        return (num > 10) ? num ** 2
            : (num < 7) ? "number less than seven"
                : (num === 9) ? 8
                    : (num === 8) ? 7
                        : "Error";
    }

    console.log(getParser(9));
}
{
    console.log(`Task №12-------------------------------------------------------------------`);
    console.log("Дана строка. Сделайте заглавным первый символ каждого слова этой строки. " +
        "Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, " +
        "делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.");



    function firstLaterCaps(text) {
        let arrS = text.split(' ');
        return arrS.reduce((result, word)=>{return result + ucfirst(word)+ ' '},'');  //Look helpFunction
    }

    console.log(firstLaterCaps("делать первые символы этой строки заглавным"));
}
{
    console.log(`Task №13-------------------------------------------------------------------`);
    console.log("Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.");

    function getParsingText(text) {
        let arrS = text.split('_');
        return arrS.reduce((result, word)=>{return result + ucfirst(word)},'');  //Look helpFunction
    }

    console.log(getParsingText("var_text_hello"));
}
{
    console.log(`Task №14-------------------------------------------------------------------`);
    console.log("Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. " +
        "Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. " +
        "Функция должна возвращать true или false. Показать решение.");

    function isArray(searchText, arrText) {
        return arrText.some(function (text){return text===searchText});
    }

    let arrText = ["Функция", "первым", "параметром", "должна принимать", "текст элемента"];
    console.log(isArray("параметром", arrText));
}
{
    console.log(`Task №15-------------------------------------------------------------------`);
    console.log("Дана строка, например, '123456'. Сделайте из нее '214365'.");

    let s = "123456";
    let arrS =[];

    arrS = s.split('');

    arrS.reduce((arrR, currItem, index, arr) => {
        if (index % 2 !== 0) {
            [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]]
        }
        }, '');

    s = arrS.join('');

    console.log(s); //arrS.toLocaleString());

}
{
    console.log(`Task №16-------------------------------------------------------------------`);
    console.log("Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, " +
        "которая при каждом вызове дает число на 1 больше, и так до бесконечности. " +
        "Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. " +
        "Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. " +
        "Генераторов можно создать сколько угодно. ФОТО в ДЗ");

    function sequenceInc(num) {
        return ++num;
    }

    var generator = sequence(10,3);
    var generator2 = sequence(7,1);

    console.log(generator());
    console.log(generator());

    console.log(generator2());

    console.log(generator());

    console.log(generator2());
}
{
    console.log(`Task №17-------------------------------------------------------------------`);
    console.log("Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз " +
        "и возвращает массив с результатами вызовов.  ФОТО в ДЗ");

    function take(gen, x) {
        let arrRes = [];
        while (x--) arrRes[arrRes.length] = gen();

        return arrRes;
    }

    var gen2 = sequence(0,2);

    console.log(take(gen2,5).toLocaleString());
}
{
    console.log(`Task №18-------------------------------------------------------------------`);
    console.log("Напиши функцию map(fn, array), которая принимает на вход функцию и массив," +
        " и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:  ФОТО в ДЗ\n" +
        "\n" +
        "Обрати внимание: функция не должна изменять переданный ей массив:  ФОТО в ДЗ\n");

    function map(fn, array) {
        let arrayRes = [];
        array.forEach(function (item) {arrayRes[arrayRes.length] = fn(item);});
        return arrayRes;
    }

    console.log(map(square, [1,2,3,4]).toLocaleString());
    console.log(map(square, []).toLocaleString());

}
{
    console.log(`Task №19_1-------------------------------------------------------------------`);
    console.log("Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen, " +
        "где gen — функция-генератор вроде той, что была в 17 задании. fmap возвращает новую функцию-генератор, " +
        "которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a. Пример: ФОТО в ДЗ\n" +
        "\n" +
        "А, еще, сделайте тогда, чтобы в качестве gen можно было указать функцию с аргументами, и при вызове\n" +
        "\n" +
        "Эти аргументы бы передавались функции gen. Аргументов может быть любое количество. \n" +
        "Подсказка: если непонятно, как сделать функцию, принимающую произвольное число аргументов, " +
        "то стоит погуглить про псевдопеременную arguments (псевдопеременная значит, что она выглядит как переменная, " +
        "но формально ей не является). Чтобы понять, как вызвать функцию с заранее неизвестным числом аргументов, " +
        "можно погуглить Function.prototype.call и Function.prototype.apply. В JS функции - это объекты, " +
        "и у них есть полезные методы и свойства.");

    function fmap(square, gen) {
       return  function () {return square(gen());}
    }

    var gen = sequence(1, 1);
    var squareGen = fmap(square, gen);

    console.log(squareGen());
    console.log(squareGen());
    console.log(squareGen());
    console.log(squareGen());
}
{
    console.log(`Task №19_2-------------------------------------------------------------------`);

    function fmap(square, add) {
        return  function (...ar) {return square(add(...ar));}
    }

    function add(...ar) {return ar.reduce((sum, currItem) => sum + currItem);}

    var squareAdd = fmap(square, add);

    console.log(squareAdd(2,3));
    console.log(squareAdd(5,7));

}
{
console.log(`Task №20-------------------------------------------------------------------`);
console.log("Написать функцию filter, которая принимает функцию-предикат и массив. " +
    "Возвращает она массив значений, для которых предикат вернет true.  ФОТО в ДЗ\n" +
    "\n" +
    "Функция не должна изменять исходный массив\n");

    function filter(arr, predic) {return arr.filter(function (value) { return predic(value)});}

    var input = [1, 2, 3, 4, 5, 6];
    function  isEvent(x) {return x%2 == 0;}

    console.log(filter(input, isEvent).toLocaleString());
    console.log(input.toLocaleString());
}