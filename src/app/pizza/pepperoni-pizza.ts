import { PizzaInterface } from "./pizza-interface";

export class PepperoniPizza implements PizzaInterface {
    prepare() {
        console.log('pepperoni piza prepared!');
    }
    bake() {
        console.log('pepperoni piza baked!');
    }
    cut() {
        console.log('pepperoni piza cutted!');
    }
    box() {
        console.log('pepperoni piza boxed!');
    }
}
