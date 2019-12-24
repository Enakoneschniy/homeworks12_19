let start = 0;
let step = 1;
function sequence(start, step) {
    let value = start - step;

    return function() {
        value += step;
        return value;
    }
}
function take(gen,x){
    let arr = [];
    for(let i = 0; i < x; i++ ){
        arr.push(gen());
    }
    return arr;
}
let gen = sequence(0, 2);
console.log(take(gen,5));
