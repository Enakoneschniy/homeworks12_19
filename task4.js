let Compare = () =>{
    const FirstNumber = parseFloat(prompt('Введите первое число'));
    console.log(FirstNumber);
    const SecondNumber = parseFloat(prompt('Введите второе число'));
    console.log(SecondNumber);
    FirstNumber==SecondNumber ? console.log('Числа равны') : 
    FirstNumber>SecondNumber ? console.log('Первое число больше'):console.log('Второе число больше');
}
Compare()