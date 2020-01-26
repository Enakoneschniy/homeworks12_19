let n = prompt(`n`,``);
function getNum(n, x) {
    if (n  > 10) {
        x = getNum(Math.floor(n / 10), x);
    }
    x += n % 10 + ` ` ;
    return x;
}
console.log(getNum(n,``));