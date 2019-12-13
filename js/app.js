// Task 01
console.log('*Task01*');
let num01 = 4;
while (num01 <= 400) {
    console.log(num01++);
}

// Task 02
console.log('*Task02*');
let num02 = 1;
while (num02 < 13) {
    console.log(num02 += 3);
}

//Task 03
console.log('*Task 03*');
let num03 = 654;
while (num03 >= 0) {
    console.log(num03--);
}

// Task 04
console.log('*Task 04*');
let index = 0;
let num04 = 1983;
while (num04 <= 2017) {
    console.log(++index, num04++);
}

//Task 05
console.log('*Task 05*');
let num05 = -4;
while (num05 <= 100) {
    console.log(num05 += 2);
}

// Task 06
console.log('*Task 06*');
index = 0;
for(let num06 = 1; num06 <= 9; num06++) {
    console.log(++index, num06 * 7);
}

//Task 07
console.log('*Task 07*');
index = 0;
for(let num07 = 1000; num07 <= 2000; num07++) {
    console.log(++index, String.fromCharCode(num07));
}

//Task 08
console.log('*Task 08*');
let total08 = 0;
for(let num08 = 0; num08 <= 100; num08++) {
    total08 = total08 + num08;
}
console.log(total08);

//Task 09
console.log('*Task 09*');
let total09 = 1;
for(let num09 = 1; num09 <= 50; num09++) {
    total09 = total09 * num09;
}
console.log(total09);

//Task 10
console.log('*Task 10*');
let arr10 = [];
let arr10Length = prompt('Длина массива');
for (let n = 1; n <= arr10Length; n++) {
    let str10 = '';
    for(let z = 1; z <= n; z++) {
        str10 = str10.concat('x')
    }
    arr10.push(str10);
}
console.log(arr10);

//Task 11
console.log('*Task 11*');
let arr11 = [];
let arr11Length = prompt('Длина массива');
for (let m = 1; m <= arr11Length; m++) {
    let str11 = '';
    for(let c = 1; c <= m; c++) {
        str11 = str11.concat(m)
    }
    arr11.push(str11);
}
console.log(arr11);
