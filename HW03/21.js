let g = [];
let arr = [];
for (let i = 0; i < 10; i++) {
    let cnk = 1;
    g.push(cnk);
    for (let j = 1; j <= i; j++) {
        cnk *= (i - j + 1);
        cnk /= j;
        g.push(+cnk.toFixed(0));
    }
    arr.push(g);
    g = [];
}
arr.toString = () => {
    let str = "";
    let c = arr[arr.length - 1].join(' ').length;
    arr.forEach((n, i, a) => {
        let co = a[i].join(' ').length;
        str += "\n" + ''.repeat(Math.round((c - co) / 2)) + n.join(' ');
    });
    return str;
};
console.log(arr.toString());