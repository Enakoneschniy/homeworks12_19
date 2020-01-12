function num(n) {
    if (n === 1) {
        return n;
    }
    return n + num(n - 1);
}

console.log(num(4));