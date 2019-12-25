//Task 1
// {
// let i = 4;
// for(i = 4; i <= 400; i++)
// {
//     console.log(i);
// }
// }

//Task 2
// {
// let i = 4;
// for (i = 4; i < 14; i+=3)
// {
//     console.log(i);
// }
// }

//Task 3
// {
//     let i = 654;
//     for (i == 654; i >= 0; i--) {
//         console.log(i);
//     }
// }

//Task 4
// {
// let i = 1983;
// for (i == 1983; i <= 2017; i++)
// {
//     console.log(i);
// }
// }

//Task 5
// {
//     let i = -4;
//     for (i == -1; i <= 100; i++) {
//         if (i % 2 == 0)
//             console.log(i);
//     }
// }

//Task 6
// {
//     let i = 1;
//     let n = 7;
//
//     for (let i = 1; i < 10; i++) {
//         {
//             console.log(n * i);
//         }
//     }
// }

//Task 8
// {
//     let sum = 0;
//     for (let i = 0; i <= 100; i++) {
//         let sum = sum + 1;
//     }
//     console.log(sum);
// }

//Task 9
// {
//     let p = 1;
//     for (i = 1; i <= 50; i++) {
//         p = p * i;
//     }
//     console.log(p);
// }

// Task 10
// {
//     let x = prompt("How long is the array ?");
//     let el = ["x", "xx", "xxx"];
//     alert(el.length);
// }

// Task 11
// {
// let n = prompt("How long is the array ?");
//     let el = ["1", "22", "333"];
//     alert(el.length);
// }

//Task 13
// {
//     let arr = ["1", "2", "3", "4", "5"];
//     arr.pop();
//     arr.unshift('1');
//     arr.pop();
//     arr.unshift('2');
//     arr.pop();
//     arr.unshift('3');
//     arr.pop();
//     arr.unshift('4');
//     arr.pop();
//     arr.unshift('5');
//     console.log(arr);
// }

//Task 15
// {
// let add = [];
// let even = [];
// let arr = ['1', '2', '3', '4', '5', '16', '17'];
// for (let i = 0; i< arr.length; i++) {
//    arr[i] % 2 == 0 ? even.push(arr[i]) : add.push(arr[i])
//
//         }
// console.log(even);
// }

//Task 14
// {
//     function Number(value) {
//         return value >= 0 && value < 10;
//     }
//
//     var add = [0, 11, 5, 8, 400, 74].filter(Number);
//     console.log(add);
// }

// Task 16
// {
//     const arr = [1, 2, 3, 4, 5, 6];
//     let temp;
//     {
//         temp = arr[0];
//         arr[0] = arr[1];
//         arr[1] = temp;
//         temp = arr[arr.length - 2];
//         arr[arr.length - 2] = arr[arr.length - 1];
//         arr[arr.length - 1] = temp;
//         console.log(arr);
//     }
// }

// Task 17
// {
// const arr = [1, 2, 3, 4, 5, 6];
//     let temp;
// {
//     temp = arr[0];
//     arr[0] = arr[4];
//     arr[4] = temp;
//     temp = arr[1];
//     arr[1] = arr[5];
//     arr[5] = temp;
//     temp = arr[arr.length - 1];
//     arr[arr.length - 1] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;
//     console.log(arr);
// }
// }

// Task 18
// const arrr =  [[1, 2, 3], [4, 5], [6]];
//
//
// function arraySum(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
//
// function Summ(arr)
// {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++)
//     {
//         sum += arraySum(arr[i]);
//     }
//     return sum;
// }
// console.log(Summ(arrr));

//Task 19
// {
// {
//     let n = 10, m = 10;
//
//     let mas = [];
//
//     for (let i = 0; i < m; i++) {
//
//         mas[i] = [];
//
//         for (let j = 0; j < n; j++) {
//
//             mas[i][j] = (i + 1) * (j + 1);
//
//         }
//     }
//
//     console.log(mas);
// }
//
// let arr =[];
// let i, j;
//
// for(i = 1; i <= 10 ; i++)
// {
//     arr[i] = 0;
// }
//
// arr[0] = 1;
// for(j = 1; j <= 10; j++)
// {
//     for(i = j; i >= 1 ; i--)
//     {
//         arr[i][j] = (i+1);
//         arr[i] = arr[i-1] + arr[i];
//     }
//     for(i = 0; i <= 10 ; i++)
//     {
//
//     }
//
//     console.log(arr);
// }
// }
//


