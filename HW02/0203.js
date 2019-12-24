let x = prompt("Please, input a value for x", '');
let y = prompt("Please, input a value for y",'');
x = +x;
y = +y;
console.log(`x = ${x}`);
console.log(`y = ${y}`);

let lAB = (8)**(1/2);
let lAC = 2;
let lBC = 2;

let lAD = Number((x)**2 + (y+2)**2)**(1/2);
let lBD = Number((x+2)**2 + (y)**2)**(1/2);
let lCD = Number((x)**2 + (y)**2)**(1/2);

console.log(`lAD = ${lAD}`);
console.log(`lBD = ${lBD}`);
console.log(`lCD = ${lCD}`);
console.log(`lAB = ${lAB}`);
console.log(`lAC = ${lAC}`);
console.log(`lBC = ${lBC}`);


let pADB = Number((lAD + lBD + lAB)/2);
let pBDC = Number((lBD + lCD + lBC)/2);
let pADC = Number((lAD + lCD + lAC)/2);
let pABC = Number((lAB + lBC + lAC)/2);
console.log(`pADB = ${pADB}`);
console.log(`pBDC = ${pBDC}`);
console.log(`pADC = ${pADC}`);
console.log(`pABC = ${pABC}`);


let sADB = Number(((pADB*(pADB-lAD)*(pADB-lBD)*(pADB-lAB))**(1/2)).toFixed(3));
let sBDC = Number(((pBDC*(pBDC-lBD)*(pBDC-lCD)*(pBDC-lBC))**(1/2)).toFixed(3));
let sADC = Number(((pADC*(pADC-lAD)*(pADC-lCD)*(pADC-lAC))**(1/2)).toFixed(3));
let sABC = Number(((pABC*(pABC-lAB)*(pABC-lBC)*(pABC-lAC))**(1/2)).toFixed(3));

console.log(`sADB = ${sADB}`);
console.log(`sBDC = ${sBDC}`);
console.log(`sADC = ${sADC}`);
console.log(`sABC = ${sABC}`);

console.log(`sBDC + sADB + sADC = ${sBDC + sADB + sADC}`);
let r = 1;
let rD = ((x)**2 + (y)**2)**(1/2);
let sr = r*3.14**2;
let srd = rD*3.14**2;
console.log(`r = ${r}`);
console.log(`rD = ${rD}`);
console.log(`sr = ${sr}`);
console.log(`srd = ${srd}`);


if (sABC == (sBDC + sADB + sADC) || sr >= srd) {
    alert(`The point is in the area`);
} else alert(`The point is not in the area`);
