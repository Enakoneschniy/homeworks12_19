let n = prompt(`n`,``);
function getNum(n, x) {
    x += n % 10 + ` ` ;
    if (n  > 10) {
        x = getNum(Math.floor(n / 10), x);
    }return x;
}
console.log(getNum(n,``));