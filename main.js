function num(n) {
   if (n < 1) {
       console.log("Error!");
   } else if (n === 1){
       console.log(n);
   } else {
       console.log(n);
       num(n - 1);
   }
}

num(5);