export default class Hamburger {
    size = `small`;
    filler = `cheese`;
    isSpice = false;
    isMayo = false;

    SIZE = {
        small: {
            calories: 20,
            price: 50
        },
        large: {
            calories: 40,
            price: 100
        },
        huge: {
            calories: 80,
            price: 175
        }
    };
    FILLER = {
        cheese: {
            calories: 20,
            price: 10
        },
        salad: {
            calories: 5,
            price: 20
        },
        potato: {
            calories: 10,
            price: 15
        }
    };
    SPICE = {
        calories: 0,
        price: 15
    };
    MAYO = {
        calories: 5,
        price: 20
    };

    constructor(size, filler) {
        this.setSize(size);
        this.setFiller(filler);
    }

    setSize = (size) => {
        if (size && size in this.SIZE) {
            this.size = size;
        } else if (size !== '' && typeof size !== 'undefined') {
            throw `Wrong Burger Size!`
        }
        return this;
    };
    setFiller = (filler) => {
        if (filler && filler in this.FILLER) {
            this.filler = filler;
        } else if (filler !== '' && typeof filler !== 'undefined') {
            throw `Wrong Burger Size!`
        }
        return this;
    };
    addSpice = () => {
        this.isSpice = true;
        return this;
    };
    addMayo = () => {
        this.isMayo = true;
        return this;
    };

    calculate = () => {
        let price = 0;
        let calories = 0;

        price += this.SIZE[this.size].price + this.FILLER[this.filler].price;
        calories += this.SIZE[this.size].calories + this.FILLER[this.filler].calories;

        if (this.isSpice === true) {
            price += this.SPICE.price;
            calories += this.SPICE.calories;
        }
        if (this.isMayo === true) {
            price += this.MAYO.price;
            calories += this.MAYO.calories;
        }
        return {
            price: price,
            calories: calories
        }
    }
}