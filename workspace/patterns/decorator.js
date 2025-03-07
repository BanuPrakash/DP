class Pizza {
    constructor(description) {
        this.description = description;
    }
    getDescription() {
        return this.description;
    }

    getCost() {
        throw new Error("abstract Pizza!!!");
    }
}

// The decorator class :  It extends Pizza to be
// interchangeable with it toppings decorator can
// also be implemented as an interface
class ToppingsDecorator extends Pizza {
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }
    getDescription() {
        throw new Error("abstract Decorator!!!");
    }
}

// Concrete pizza classes
class PeppyPaneer extends Pizza {
    description = "PeppyPaneer";
    getCost() { return 100; }
}

class Margherita extends Pizza {
    description = "Margherita";
    getCost() { return 100; }
}

// Concrete toppings classes
class ExtraCheese extends ToppingsDecorator {

    constructor(pizza) {
        super();
        this.pizza = pizza;
    }
    getDescription() {
        return this.pizza.getDescription() + ", ExtraCheese ";
    }
    getCost() { return 40 + this.pizza.getCost(); }
}
class Pepperoni extends ToppingsDecorator {
    constructor(pizza) { 
        super();
        this.pizza = pizza; 
    }
    getDescription() {
        return this.pizza.getDescription() + ", Pepperoni ";
    }
    getCost() { return 90 + this.pizza.getCost(); }
}


// Other toppings can be coded in a similar way

let pizza = new Margherita();
console.log(pizza.getDescription() + " Cost :" + pizza.getCost());


// decorate it with ExtraCheese topping
pizza = new ExtraCheese(pizza);

//decorate it with paneer topping
pizza = new Pepperoni(pizza);

console.log(pizza.getDescription() +  " Cost :" + pizza.getCost());
