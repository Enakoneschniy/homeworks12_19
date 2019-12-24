let x = prompt("Please, input a value for x", '');
let y = prompt("Please, input a value for y",'');
x = Number(x);
y = Number(y);
let lAB = (32)**(1/2);
let lAC = 8;
let lBC = (32)**(1/2);

let lAD = ((x+4)**2 + (y)**2)**(1/2);
let lBD = ((x)**2 + (y-4)**2)**(1/2);
let lCD = ((x-4)**2 + (y)**2)**(1/2);
console.log(`lAD = ${lAD}`);
console.log(`lBD = ${lBD}`);
console.log(`lCD = ${lCD}`);
console.log(`lAB = ${lAB}`);
console.log(`lAC = ${lAC}`);
console.log(`lBC = ${lBC}`);


let pADB = (lAD + lBD + lAB)/2;
let pBDC = (lBD + lCD + lBC)/2;
let pADC = (lAD + lCD + lAC)/2;
let pABC = (lAB + lBC + lAC)/2;
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

if (sABC === (sBDC + sADB + sADC)) {
    console.log(`The point is in the area`);
} else {
    console.log(`The point is not in the area`);
}
