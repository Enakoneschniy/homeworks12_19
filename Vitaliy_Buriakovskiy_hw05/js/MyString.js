class MyString{
    reverce(arg){
        return  arg.split('')
                   .reduce((res, curItem)=> curItem + res,'')
    }

    ucFirst(arg){
        return arg[0].toUpperCase() + arg.slice(1);
    }

    ucWords(arg){
        return arg.split(' ')
                  .reduce((res, curItem)=> res + this.ucFirst(curItem) + ' ','');
    }
}