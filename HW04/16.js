//let start = prompt(`Please, input a start`, ``) ?? 0;
//let step = prompt(`Please, input a step`, ``) ?? 1;
function sequence(start, step) {
    for(let i =1; i <= step; i++ ) {
        start = sequence(start);

    }
    let v = start;
    return function () {
       return v;
    }//yield start;
}
function sequence(start) {
    return ++start;
}




/*function sequence2(step) {
    if(step === ``){
        step = 1;
    }
   return  step++
}
function sequence(start,step) {
    return start += +sequence2(step)
}
console.log(sequence(start,step));
console.log(sequence(start,step));


function f(start) {
    return ++start;
}
function f1(start, step) {
    if(start === `` || defaultStart !== 0){
        start = defaultStart;
    }
    if(step === ``){
        step = 1;
    }
    let a = start;
    for(let i =1; i <= step; i++ ) {
        //console.log(a);
        a = f(a);
    }
    defaultStart = a;
    return a;
}*/
var generator = sequence(10, 3);
var generator2 = sequence(7, 1);
console.log(generator());
console.log(generator());
console.log(generator2());
console.log(generator());
console.log(generator2());
//console.log(f1(start, step));