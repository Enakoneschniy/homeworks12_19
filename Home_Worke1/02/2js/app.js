let x = Number( prompt('введите число',));
let y = Number( prompt('введите число',));
if((y-x<=0 && y+x<=0 && y>=-1) || (y-x>=0 && y+x>=0 && y<=1)){
    alert("Точка попадает в область")
}else{
    alert("Точка НЕ попадает в область")
}