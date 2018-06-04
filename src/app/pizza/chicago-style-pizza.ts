import { PizzaInterface } from "./pizza-interface";

export class ChicagoStyleClamPizza implements PizzaInterface {
    prepare() {
        console.log('clam piza prepared in Chicago-style!');
    }
    bake() {
        console.log('clam piza baked in Chicago-style!');
    }
    cut() {
        console.log('clam piza cutted in Chicago-style!');
    }
    box() {
        console.log('clam piza boxed in Chicago-style!');
    }
}

export class ChicagoStyleCheesePizza implements PizzaInterface {
    prepare() {
        console.log('cheese piza prepared in Chicago-style!');
    }
    bake() {
        console.log('cheese piza baked in Chicago-style!');
    }
    cut() {
        console.log('cheese piza cutted in Chicago-style!');
    }
    box() {
        console.log('cheese piza boxed in Chicago-style!');
    }
}

export class ChicagoStylePepperoniPizza implements PizzaInterface {
    prepare() {
        console.log('pepperoni piza prepared in Chicago-style!');
    }
    bake() {
        console.log('pepperoni piza baked in Chicago-style!');
    }
    cut() {
        console.log('pepperoni piza cutted in Chicago-style!');
    }
    box() {
        console.log('pepperoni piza boxed in Chicago-style!');
    }
}

export class ChicagoStyleVeggiePizza implements PizzaInterface {
    prepare() {
        console.log('veggie piza prepared!');
    }
    bake() {
        console.log('veggie piza baked in Chicago-style!');
    }
    cut() {
        console.log('veggie piza cutted in Chicago-style!');
    }
    box() {
        console.log('veggie piza boxed in Chicago-style!');
    }
}
