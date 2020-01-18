function seq(a, b) {     //Task 1-2
    let result = "";

    function _seq() {
        result += ` ${a}`;
        if (a < b) {
            a++;
            _seq();
        }else if (a > b) {
            a--;
            _seq();
        }
        return;
    }

    _seq();
    return result;
}

function decomp(a, frml) {  //Task 3 4 5
    let result = "";

    function _decomp() {
        if (a !== 0) {
            result = frml(a, result);
            a = a / 10 - a / 10 % 1;
            _decomp();
        }
        return;
    }
    _decomp();
    return result;
}