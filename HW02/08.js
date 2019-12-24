let a = prompt("Please, input your year of your Birth", '');
a = 2019 - a;
if(a >= 16){
    alert(`Welcome`);
}else if(a < 16 && a >= 0){
    alert(`No entry, you are so young`);
}else alert(`The age is incorrect`);
