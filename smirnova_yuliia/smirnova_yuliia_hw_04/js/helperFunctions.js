export function isEven(a) {
    return a % 2 === 0
}

export function randomArray(N = 10) {
    const resArray = [];
    for(let i = 0; i < N; i ++) {
        resArray.push(Math.round(Math.random() * 100));
    }
    return resArray;
}