let a = prompt('input a');
a = parseInt(a);
let b = prompt('input b');
b = parseInt(b);
if (a>b){
    console.log(a+b/2*4);
} else if (a==b){
    console.log(400);
}
else if (a<b) {
    console.log(a-b+2/b*4);
}