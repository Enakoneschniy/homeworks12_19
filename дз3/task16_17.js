let l = 0;
do {
    l = parseInt(Math.random() * (21 - 1) + 1);
}
while (l % 2 != 0);
console.log(l);
const arr = [];
arr.length = l;
for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(Math.random() * (30 - 1) + 1)
};
console.log(arr);
for (let i = 0; i < l - 1; i += 2) {
    arr.push(arr[i + 1], arr[i]);
}
arr.splice(0, l)
console.log(arr);
for (let i = 0; i < l - 1; i += 2) {
    arr.push(arr[l - 1 - i - 1], arr[l - 1 - i]);
}
arr.splice(0, l)
console.log(arr);
