class MyString {
    reverse(string) {
        return string.split("").reverse().join("");
    }
    ucFirst(string) {
        return string[0].toUpperCase() + string.slice(1)
    }
    ucWords(string) {
        const words = string.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = this.ucFirst(words[i]);
        }
        return words.join(" ");
    }
}


const string = new MyString();
console.log(string.ucFirst("my name is lena"));
console.log(string.reverse("my name is lena"));
console.log(string.ucWords("my name is lena"));
