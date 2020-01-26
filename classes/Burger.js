const small = {
    name: 'small',
    price: 50,
    calories: 20
};
const big = {
    name: 'big',
    price: 100,
    calories: 40,
};
const cheese = {
    name: 'cheese',
    price: 10,
    calories: 20
};
const salad = {
    name: 'salad',
    price: 20,
    calories: 5,
};
const potato = {
    name: 'potato',
    price: 15,
    calories: 10,
};
const flavoring = {
    name: 'flavoring',
    price: 15,
    calories: 0,
};
const mayonnaise = {
    name: 'mayonnaise',
    price: 20,
    calories: 5,
};

const ma = {
    name: 'mayonnaise',
};


 class Burger {
    #size;
    #otherStuffing;
    #stuffing;
     constructor(size, stuffing, otherStuffing = null) {
        this.#size = size;
        this.#stuffing = stuffing;
        this.#otherStuffing = otherStuffing;
     }
     isValidation(obj) {
         try {
             if(!obj.name) {
                 throw new SyntaxError("No name")
             }
             if(!obj.price) {
                 throw new SyntaxError("No price")
             }
             if(!obj.calories) {
                 throw new SyntaxError("No calories")
             }
             return true;
         }catch (e) {
             console.log(e.message);
             return false;
         }
     };
     get burgerInfo() {
         if(!this.isValidation(this.#size) && !this.isValidation(this.#stuffing)) {
             return 0;
         }
         let totalPrice = this.#size.price + this.#stuffing.price;
         let totalCalories = this.#size.calories + this.#stuffing.calories;
         if (this.#otherStuffing !== null) {
             if(!this.isValidation(this.#otherStuffing)) {
                 return 0;
             }
             totalPrice += this.#otherStuffing.price;
             totalCalories += this.#otherStuffing.calories
         }
         return (`Size of burger: "${this.#size.name}" Total price: ${totalPrice} Total calories: ${totalCalories}`);
     }
}
const B1 = new Burger(big, cheese, mayonnaise);
 const B2 = new Burger(ma, cheese, mayonnaise);
 console.log(B2.burgerInfo);
