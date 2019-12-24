let x = prompt("Please, input a value for x", '');
let y = prompt("Please, input a value for y",'');
x = Number(x);
y = Number(y);
let lAB = (2)**(1/2);
let lBC = 2;
let lAC = (2)**(1/2);

let lAD = ((x)**2 + (y)**2)**(1/2);
let lBD = ((x+1)**2 + (y-1)**2)**(1/2);
let lCD = ((x-1)**2 + (y-1)**2)**(1/2);
console.log(`lAD = ${lAD}`);
console.log(`lBD = ${lBD}`);
console.log(`lCD = ${lCD}`);
console.log(`lAB = ${lAB}`);
console.log(`lAC = ${lAC}`);
console.log(`lBC = ${lBC}`);
console.log(`lAB = ${lAB}`);


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


let lAB1 = (2)**(1/2);
let lBC1 = 2;
let lAC1 = (2)**(1/2);

let lAD1 = ((x)**2 + (y)**2)**(1/2);
let lBD1 = ((x+1)**2 + (y+1)**2)**(1/2);
let lCD1 = ((x-1)**2 + (y+1)**2)**(1/2);


console.log(`lAD1 = ${lAD1}`);
console.log(`lBD1 = ${lBD1}`);
console.log(`lCD1 = ${lCD1}`);
console.log(`lAB1 = ${lAB1}`);
console.log(`lAC1 = ${lAC1}`);
console.log(`lBC1 = ${lBC1}`);
console.log(`lAB1 = ${lAB1}`);


let pADB1 = (lAD1 + lBD1 + lAB1)/2;
let pBDC1 = (lBD1 + lCD1 + lBC1)/2;
let pADC1 = (lAD1 + lCD1 + lAC1)/2;
let pABC1 = (lAB1 + lBC1 + lAC1)/2;


console.log(`pADB1 = ${pADB1}`);
console.log(`pBDC1 = ${pBDC1}`);
console.log(`pADC1 = ${pADC1}`);
console.log(`pABC1 = ${pABC1}`);


let sADB1 = Number(((pADB1*(pADB1-lAD1)*(pADB1-lBD1)*(pADB1-lAB1))**(1/2)).toFixed(3));
let sBDC1 = Number(((pBDC1*(pBDC1-lBD1)*(pBDC1-lCD1)*(pBDC1-lBC1))**(1/2)).toFixed(3));
let sADC1 = Number(((pADC1*(pADC1-lAD1)*(pADC1-lCD1)*(pADC1-lAC1))**(1/2)).toFixed(3));
let sABC1 = Number(((pABC1*(pABC1-lAB1)*(pABC1-lBC1)*(pABC1-lAC1))**(1/2)).toFixed(3));

console.log(`sADB1 = ${sADB1}`);
console.log(`sBDC1 = ${sBDC1}`);
console.log(`sADC1 = ${sADC1}`);
console.log(`sABC1 = ${sABC1}`);

console.log(`sBDC1 + sADB1 + sADC1 = ${sBDC + sADB + sADC}`);

if (sABC === (sBDC + sADB + sADC) || sABC1 === (sBDC1 + sADB1 + sADC1)) {
    alert(`The point is in the area`);
} else alert(`The point is not in the area`);
