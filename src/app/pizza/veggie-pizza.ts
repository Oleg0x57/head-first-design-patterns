import { PizzaInterface } from "./pizza-interface";

export class VeggiePizza implements PizzaInterface {
    prepare() {
        console.log('veggie piza prepared!');
    }
    bake() {
        console.log('veggie piza baked!');
    }
    cut() {
        console.log('veggie piza cutted!');
    }
    box() {
        console.log('veggie piza boxed!');
    }
}
