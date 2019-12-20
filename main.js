function degreeOfNum(num, degree) {
    let result = num;
    for (let i = 0; i < degree - 1; i++) {
        result *= num;
    }
    return result
}

console.log(degreeOfNum(4, 4));