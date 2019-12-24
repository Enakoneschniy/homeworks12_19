let a = prompt("Please, input a number of  apartment", '');
if(a >= 1 && a <= 20) {
    alert(`This apartment in the first porch`);
}else if(a >= 21 && a <= 48){
    alert(`This apartment in the second porch`);
}else if(a >= 49 && a <= 90){
    alert(`This apartment in the third porch`);
}else if (a > 90) {
    alert(`The number of apartment is not at the build`);
}else alert(`The number of apartment is incorrect`);