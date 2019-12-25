function ucFirst(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function ucEveryWord(string) {
    const stringArr = string.split(" ");
    for (let i = 0; i < stringArr.length; i++) {
        stringArr[i] = ucFirst(stringArr[i])
    }
    return stringArr.join(" ")
}
console.log(ucEveryWord("qwerty vbn"));