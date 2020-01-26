let n = prompt(`n`,``)
function sum(n) {
    if (n === 1) {
        return n;
    } else {
        return (n % 10) + sum((n / 10) | 0);
    }
}
console.log(sum(n));