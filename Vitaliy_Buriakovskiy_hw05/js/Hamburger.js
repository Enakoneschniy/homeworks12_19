class Hamburger{
    #size;
    #filling;
    #topping = [];

    #MENU = {
        size: {
            small:      {price: 50, calories: 20},
            big:        {price:100, calories: 40}
              },
        filling: {
            cheese:     {price: 10, calories: 20},
            salad:      {price: 20, calories:  5},
            potatoes:   {price: 15, calories: 10}
             },
        topping: {
            condiment:  {price: 15, calories:  0},
            mayonnaise: {price: 20, calories:  5},
        }
    }

    constructor(size, filling){
        if(this._isValid(size)) this.#size = size;
        if(this._isValid(filling)) this.#filling=filling;
    }

    _isValid (value){
       if(typeof this.#MENU.size[value] !== "undefined") {
            return true;
        } else if(typeof this.#MENU.filling[value] !== "undefined") {
            return true;
        } else if(typeof this.#MENU.topping[value] !== "undefined") {
            return true;
        } else {
            console.log("Кидаем исключение (тему еще не проходили)")
            return true;
        }
       return false
    }

    addTopping(value) {
         if(this._isValid(value)) this.#topping[this.#topping.length] = value;
    }

    calculateCalories(){

        return this.#MENU.size[this.#size].calories+
            this.#MENU.filling[this.#filling].calories+
            this.#topping.reduce((sum,curItem)=> sum + this.#MENU.topping[curItem].calories,0);
    }

    calculatePrice(){
        return this.#MENU.size[this.#size].price
            +this.#MENU.filling[this.#filling].price
            +this.#topping.reduce((sum,curItem)=>sum + this.#MENU.topping[curItem].price,0);
    }
}