let num = +prompt("Enter number");

function processNum(number) {
    if (number > 10) {
        return number * number;
    } else if (number < 7) {
        return "Number < 7"
    } else {
        return number - 1;
    }
}

console.log(processNum(num));