let a = +prompt(`Value of a`,``);
let b = +prompt(`Value of b`,``);
function toCompare(a, b, num) {
    num += a + ` `;
    if (a < b) {
        num = toCompare(a + 1, b, num)
    }
    return num;
}
console.log((a < b ? toCompare(a, b, ``) : toCompare(b, a, ``).split(` `).reverse().join(` `)));