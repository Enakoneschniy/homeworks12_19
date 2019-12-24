let a = prompt("Please, input your length of work", '');
if(a >= 0 && a < 3){
    alert(`Your allowance is 0%`);
}else if (a >= 3 && a < 10){
    alert(`Your allowance is 10%`);
}else if(a >= 10 && a < 20){
    alert(`Your allowance is 20%`);
}else if(a < 0){
    alert(`Please, input correct length of work`);
}else alert(`Your allowance is 25%`);