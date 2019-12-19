const a = 2;
const b = -2;
const c = '2';

const x = a + +b + c;
console.log(x);
console.log(parseFloat(c));

const y = a % 0;
console.log(y);

const square = a ** 3;
console.log(square);

let aa = 2;
console.log(aa++);
console.log(aa);
console.log(++aa);

console.log(aa--);
console.log(aa);
console.log(--aa);

let s = 2,
    d = 4,
    f = 6;
let z = s++ - --d * ++f;
console.log(z);
z += 3; // z = z + 3;
z = (1 + 2, 3 + 4); // 7
z = (g = 4 + 4, 3 + g);
console.log(z);





const age = 18;
const status = 'Сын депутата';

if (age >= 18 && age < 21) {
    console.log("Можем продать слабоалкоголку")
} else if (age < 18) {
    console.log("Не можем продать");
} else if (age >= 21) {
    console.log("Можем продать")
}



/*
Уравнение прямой на координатной оси
*/
