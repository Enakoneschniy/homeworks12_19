let square = (x) => x * x;
let add = (x, y) => x + y;
function sequence(start, step) {
    let value = start - step;
    return function() {
        value += step;
        return value;
    }
}
let fmap = (a, gen) => a(gen());

let gen = sequence(1, 1);
console.log(fmap(square, gen));
console.log(fmap(square, gen));
console.log(fmap(square, gen));
console.log(fmap(square, gen));
//-----------------------//
let fmap2 = (a, b) => function (x,y) {
    return a(b(x,y));
};
let squareAdd = fmap2(square,add);
console.log(squareAdd(2, 3));
console.log(squareAdd(5, 7));