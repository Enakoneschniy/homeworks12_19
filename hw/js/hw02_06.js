let a;
a = prompt('Number pls');
if (a >= 1 && a <= 20) {
    alert("First porch")
} else if (a > 20 && a <= 48) {
    alert("Second porch")
} else if (a > 48 && a <= 90) {
    alert("Third porch")
} else if (a < 1 || a > 90) {
    alert("Error 404")
}