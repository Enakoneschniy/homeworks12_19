let a = prompt("Hello!", '');

if(a === `Hello, glad to see you again!` || a === `Hello!`) {
    //alert(`Can I help you?`);
    let b = prompt("What do you want?", '');
    if(b === `Give me a beer` || b === `Give me cigarettes`|| b ===  `Give me cigarettes and a beer` || b ===  `Give me a beer and cigarettes`) {
        //alert("Are you an adult?");
        let c = prompt(`Input your age, please!`);
        if(c >= 18 ){
            alert(`Fine`);
            let d = prompt("such amount with you, pay via terminal, and enter you PIN?", '');
            alert("Smoking and alcohol are harmful to your health");
        }else alert(`Not fine, goodbye`);
    }else alert("We  haven\`t this product! ");
}else alert(`You are CAD! I will not serve you`);



