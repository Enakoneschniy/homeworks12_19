let sumOfEl = () => {
    let l = parseInt(Math.random() * (11 - 1) + 1);
    const arr = [];
    arr.length = l;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        l = parseInt(Math.random() * (6 - 1) + 1);
        arr[i] = [];
        arr[i].length = l;
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = parseInt(Math.random() * (10 - 1) + 1);
            sum += arr[i][j];
        }
    }
    console.log(arr);
    console.log(sum);
}
sumOfEl();