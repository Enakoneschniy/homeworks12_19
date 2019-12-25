function inArray(word, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return true
        }
    }
    return false
}

console.log(inArray("jopa", ["d", "a", "lfj", "vfnjs", "jgjj"]));