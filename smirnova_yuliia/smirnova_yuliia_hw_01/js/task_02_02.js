// y = 1
// y = x

let x = prompt('Координата по оси X', );
let y = prompt('Координата по оси Y', );

if (y <= 1 && x <= 1 && y >= 0 && y === x || y <= -1 && y === x && x >= -1) {
    alert("Точка попадает в область")
} else {
    alert("Точка НЕ попадает в область")
}