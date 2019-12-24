let a = prompt("Please, input a value for a", '');
let b = prompt("Please, input a value for b",'');
let x;

a = Number(a);
b = Number(b);
if(a > b){
    x = a + b/2*4;
}else if(a < b){
    x = a - b + 2/b*4;
}else{
    x = 400;
}
console.log(`x = ${x}`);
