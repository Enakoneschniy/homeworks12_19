const n = prompt(`Value of n`,``);
function toNum(n, x) {
    if(n > 1){
        x = toNum(n - 1, x);
    } x += n + ` `;
    return x;
}
console.log(toNum(n, ` `));