export default class {
    #SIZE
    #FILLING
    #CONDIMENT //(приправа)
    #MAYONAISSE

    constructor(size, filling) {
        try {

            if (typeof size != 'string' || typeof filling != 'string') {
                throw 'You have to use strings in arguments'
            }
        }

        catch (e) {

            console.log(e);
            return

        }

        try {
            if (size === 'big' || size === 'small') {
                this.#SIZE = size
            }
            else {
                throw 'There are only `big` and `small` properties'
            }
        }

        catch (e) {
            console.log(e);
            return

        }

        try {
            if (filling === 'cheese'
                || filling === 'salad'
                || filling === 'potatoes') {
                this.#FILLING = filling
            }
            else {
                throw 'You can use only `potatoes`, `salad` or `cheese` as a filling'
            }
        }
        catch (e) {
            console.log(e);
            return

        }
    }

    addCondiment() {
        this.#CONDIMENT = true
    }

    removeCondiment() {
        this.#CONDIMENT = false
    }

    addMayonnaise() {
        this.#MAYONAISSE = true
    }

    removeMayonnaise() {
        this.#MAYONAISSE = false
    }

    calculateCalories() {
        
        try {
            if (!this.#SIZE || !this.#FILLING) {throw e}
        }
        catch(e) {
            console.log('There are no correct property of size or filling');
            return
            
        }

        let calories = 0

        switch (this.#SIZE) {
            case 'small':
            calories += 20
            break;
            case 'big':
            calories += 40
            break;
        }

        switch (this.#FILLING) {
            case 'salad':
            calories += 5
            break;
            case 'potatoes':
            calories += 10
            break;
            case 'cheese':
            calories += 20
            break;
        }

        if (this.#MAYONAISSE) {
            calories += 5
        }

        return calories

    }

    calculatePrice() {

        try {
            if (!this.#SIZE || !this.#FILLING) {throw e}
        }
        catch(e) {
            console.log('There are no correct property of size or filling');
            return
            
        }

        let price = 0

        switch (this.#SIZE) {
            case 'small':
            price += 50
            break;
            case 'big':
            price += 100
            break;
        }

        switch (this.#FILLING) {
            case 'salad':
            price += 20
            break;
            case 'potatoes':
            price += 15
            break;
            case 'cheese':
            price += 10
            break;
        }

        if (this.#MAYONAISSE) {
            price += 20
        }

        if (this.#CONDIMENT) {
            price += 15
        }

        return price

    }


}
