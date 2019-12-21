function isEven(number) {return number % 2 === 0}   //Task №4, 6

function ucfirst(s) { return s= s.charAt(0).toUpperCase()+s.slice(1); }  //Task №12, 13

function isLegalAge(age) { return  age>16;}  //Task №8, 9

function printAgeControl(age) {   //Task №8, 9
    isLegalAge(age) ? console.log("добро пожаловать"): console.log("вы еще молоды");
}

function sequence(start = 0, step = 1) {  //Task №16+

    return function () {
        let result = start;
        for (let i = 0; i < step; i++) {
            start = sequenceInc(start);
        }
        return result;
    };
}

function square(x) {return x * x;}  //Task №18+