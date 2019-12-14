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

//Task 12
console.log('*Task 12*');
let total12 = 0;
for(let num12 = 0; num12 <= 100; num12++) {
    total12 = total12 + num12;
    if (total12 >= 10) {
        break;
    }
}
console.log(total12);

//Task 13
console.log('*Task 13*');
let num13 = [5, 0, 4, 87, 4, 2, 11, 8];
for (let i = 0; i < num13.length / 2; i++) {
    [num13[i], num13[num13.length - 1 - i]] = [num13[num13.length - 1 - i], num13[i]];
}
console.log(num13.toLocaleString());

//Task 14
console.log('*Task 14*');
let str14 = prompt('Введите массив через запятые');
let arr14 = str14.split(',');
let total14 = arr14.filter( e => e>0 && e<10 );
console.log(total14.toLocaleString());

//Task 15
console.log('*Task 15*');
let str15 = prompt('Введите массив через запятые');
let arr15 = str15.split(',');
let total15 = arr15.filter(e => !(e%2));
console.log(total15.toLocaleString());

// Task 16
console.log('*Task 16*');
let num16 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < num16.length; i += 2) {
    if ((i + 1) < num16.length) {
        [num16[i], num16[i + 1]] = [num16[i + 1], num16[i]];
    }
}
console.log(num16);

// Task 18
console.log('*Task 18*');
let num18 = [[1, 2, 3], [4, 5], [6]];
let total18 = 0;
for (let p = 0; p < num18.length; p++) {
    for (let t = 0; t < num18[p].length; t++) {
        total18 += num18[p][t];
    }
}
console.log(total18);