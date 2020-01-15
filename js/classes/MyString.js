export default class {
    constructor() {

    }

    reverse(string) {


        let newString = '';

        for (let i = string.length - 1; i >= 0; i--) {

            newString += string[i]
        }
        return newString

    }

    ucFirst(string) {

        let newString = string[0].toUpperCase();
        return newString += string.slice(1);

    }

    ucWords(string) {
        return string.split(' ')
            .reduce((str, item, index, array) => {
                if (index < array.length - 1) {
                    str += this.ucFirst(item) + ' ';
                } else {
                    str += this.ucFirst(item)
                }
                return str
            }, '')

    }
}