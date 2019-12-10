
const a = parseFloat (prompt('Введи a'));
console.log("a = " + a);
const b =parseFloat(prompt('Введи b'));
console.log("b = " + b);
let x;
if (a==b)
{
    x = 400;
}
else
{
    if (a>b)
    {
        x = a + b / 2 * 4; 
    }
    else
    {
        x = a - b + 2 / b * 4;
    }
}
console.log("x = " + x);
