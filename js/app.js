import {randomInteger} from "./helper.js";
import Worker from "./classes/Worker.js"
import PrivateWorker from "./classes/PrivateWorker.js"
import Hamburger from "./classes/Hamburger.js"
import MyString from "./classes/MyString.js";
import Student from "./classes/Student.js";
import {randomArray} from "./helper.js";
// import AnonWorker from "./classes/AnonWorker.js"

{
    console.log('*Task_01*');

    const i = 1;
    let n = randomInteger(2, 100);

    function counter(n) {
        if (n === 1) return 1;
        return counter(n - 1) + ` ` + n;
    }

    console.log('i = ', i);
    console.log('n = ', n);
    console.log(counter(n));
}
{
    console.log('*Task_02*');

    let i = randomInteger(1, 100);
    let q = randomInteger(1, 100);

    function counter2(i, q) {
        if (i > q) {
            if (i === q) return i;
            return i + " " + counter2(i - 1, q)
        } else {
            if (i === q) return i;
            return i + " " + counter2(i + 1, q)
        }
    }

    console.log('i = ', i);
    console.log('q = ', q);
    console.log(counter2(i, q));
}

{
    console.log('*Task_03*');

    const i = 1;
    let n = randomInteger(2, 100);

    function sum(n) {
        if (n === 1) return 1;
        return sum(n - 1) + n;
    }

    console.log('i = ', i);
    console.log('n = ', n);
    console.log(sum(n));
}
{
    console.log('*Task_04*');

    const i = 1;
    let n = randomInteger(2, 100);

    function rev(n) {
        if (n === 1) return 1;
        return n + ` ` + rev(n - 1);
    }

    console.log('i = ', i);
    console.log('n = ', n);
    console.log(rev(n));
}
{
    console.log('*Task_05*');

    const i = 1;
    let n = randomInteger(2, 100);

    function counter1(n) {
        if (n === 1) return 1;
        return counter1(n - 1) + ` ` + n;
    }

    console.log('i = ', i);
    console.log('n = ', n);
    console.log(counter1(n));
}
{
    console.log('*Task_06*');

    const junior = new Worker(`Peter`, `Parker`, 10, 23);
    const senior = new Worker(`Tony`, `Stark`, 2500, 23);

    function sumSalary(j, s) {
        return j.salary + s.salary
    }

    console.log('name : ', junior.name);
    console.log('surname : ', junior.surname);
    console.log('rate : ', junior.rate);
    console.log('days : ', junior.days);
    console.log('salary : ', junior.salary);
    console.log('name : ', senior.name);
    console.log('surname : ', senior.surname);
    console.log('rate : ', senior.rate);
    console.log('days : ', senior.days);
    console.log('salary : ', senior.salary);
    console.log('sumSalary : ', sumSalary(junior, senior));
}
{
    console.log('*Task_07*');

    console.log('Junior:');
    const junior = new PrivateWorker();
    junior.setName('Peter');
    junior.setSurname('Parker');
    junior.setRate(10);
    junior.setDays(23);
    console.log('Full name : ', junior.getFullName() + '. Salary : ', junior.getSalary());
    console.log('Senior:');
    const senior = new PrivateWorker();
    senior.setName('Tony');
    senior.setSurname('Stark');
    senior.setRate(2500);
    senior.setDays(23);
    console.log('Full name : ', senior.getFullName() + '. Salary : ', senior.getSalary());
}
{
    console.log('*Task_08*');

    console.log('Error, check TODO list')
    // TODO: Error(' private fields are not currently supported ')

    // console.log('Junior:');
    // const junior = new AnonWorker();
    // junior.setName('Peter');
    // junior.setSurname('Parker');
    // junior.setRate(10);
    // junior.setDays(23);
    // console.log('Full name : ', junior.getFullName() + '. Salary : ', junior.getSalary());
    // console.log('Senior:');
    // const senior = new AnonWorker();
    // senior.setName('Tony');
    // senior.setSurname('Stark');
    // senior.setRate(2500);
    // senior.setDays(23);
    // console.log('Full name : ', senior.getFullName() + '. Salary : ', senior.getSalary());

}
{
    console.log('*Task_09*');

    let string = new MyString();

    console.log(string.reverse('i am a fan of the team natus vincere'));
    console.log(string.ucFirst('i am a fan of the team natus vincere'));
    console.log(string.ucWords('i am a fan of the team natus vincere'));

}
{
    console.log('*Task_10*');

    let student = new Student('Artur', 'Miner', 2019);
    console.log('Full Name: ' + student.getFullName());
    console.log('Course: ' + student.getCourse());

}
{
    console.log('*Task_11*');

    console.log('Haven\'t task')

}
{
    console.log('*Task_12*');

    let arrayLetters = ['a', 'b', 'c', 'd', 'e'];
    let arrayNumbers = randomArray(5);

    function arrConcat(letter, number) {
        return letter.concat(number);
    }

    console.log('Array: ' + arrConcat(arrayLetters, arrayNumbers));
}
{
    console.log('*Task_13*');

    let arrayLetters = ['a', 'b', 'c', 'd', 'e'];
    let arrayNumbers = randomArray(5);

    function arrPush(letter, number) {
        for (number of number) {
            letter.push(number);
        }
        return letter;
    }

    console.log(arrPush(arrayLetters, arrayNumbers));
}
{
    console.log('*Task_14*');

    let arrayLetters = ['a', 'b', 'c', 'd', 'e'];
    let arrayNumbers = randomArray(5);

    function arrUnshift(letter, number) {
        for (number of number) {
            letter.unshift(number);
        }
        return letter;
    }

    console.log(arrUnshift(arrayLetters, arrayNumbers));

}
{
    console.log('*Task_15*');

    let arrNum = [1, 2, 3, 4, 5];

    function arrSliceFirst(num) {
        return num.slice(0, 3);
    }

    console.log(arrSliceFirst(arrNum));
}
{
    console.log('*Task_16*');

    let arrNum = [1, 2, 3, 4, 5];

    function arrSliceLast(num) {
        return num.slice(3);
    }

    console.log(arrSliceLast(arrNum));

}
{
    console.log('*Task_17*');

    let arrNum = [1, 2, 3, 4, 5];

    function arrSpliceFirst(num) {
        num.splice(1, 2);
        return num;
    }

    console.log(arrSpliceFirst(arrNum));
}
{
    console.log('*Task_18*');

    let arrNum = [1, 2, 3, 4, 5];

    function arrSpliceLast(num) {
        return num.splice(1, 3);
    }

    console.log(arrSpliceLast(arrNum));

}
{
    console.log('*Task_19*');

    let arrNum = [1, 2, 3, 4, 5];

    function arrSpliceReborn(num) {
        num.splice(3, 0, 'a', 'b', 'c');
        return num;
    }

    console.log(arrSpliceReborn(arrNum));

}
{
    console.log('*Task_20*');

    let arrNum = [1, 2, 3, 4, 5];

    function arrSpliceTheEnd(num) {
        num.splice(1, 0, 'a', 'b');
        num.splice(6, 0, 'c');
        num.splice(8, 0, 'e');
        return num;
    }

    console.log(arrSpliceTheEnd(arrNum));

}
{
    console.log('*Task_21*');

    let tester = {
        js: 'test',
        jq: 'hello',
        css: 'world'
    };

    console.log(Object.keys(tester));
}
{
    console.log('*Task_22*');
    console.log('Click button "Hamburger"');

    let btn = document.getElementById('btn');
    let spn = document.getElementById('someText');
    // let size = document.getElementById('choose-size');

    btn.onclick = function () {
        try {
            let burger = new Hamburger();
            let result = burger
                .setSize('huge')
                .setFiller('potato')
                .addSpice(true)
                .addMayo(true)
                .calculate();
            spn.innerHTML = `Total Price: ` + result.price + `<br/>Total Calories: ` + result.calories;
        } catch (e) {
            console.log(e);
            spn.innerHTML = `Error`;
        }
    };
}