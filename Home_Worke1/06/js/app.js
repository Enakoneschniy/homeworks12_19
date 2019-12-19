let a = Number( prompt('введите число',));
if (a<=20 && a!=0) {
    alert('1 подьезд')
} else if (a >20 && a<=48) {
    alert('2 подьезд')
} else if(a>49 && a<=90){
    alert('3 подьезд')
} else if (a >90||a==0) {
    alert('Квартиры не существует')
}