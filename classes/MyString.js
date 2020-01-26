export default class MyString {
    reverse(value) {
        return value.split(``).reverse().join(``);
    }
    ucFirst(value) {
        if (!value) return value;
        return value[0].toUpperCase() + value.slice(1);
    }
    ucWords(value) {
        if (!value) return value;
        let arr = value.split(` `);
        for(let i = 0; i < arr.length; i++ ){
            arr[i] = this.ucFirst(arr[i])
        }
        return arr.join(` `);
    }

}