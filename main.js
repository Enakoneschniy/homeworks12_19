function ucFirst(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function ucEveryWord(string) {
    const stringArr = string.split("_");
    for (let i = 1; i < stringArr.length; i++) {
        stringArr[i] = ucFirst(stringArr[i])
    }
    return stringArr.join("");
}
console.log(ucEveryWord("var_text_hello"));