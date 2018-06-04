import { PizzaInterface } from "./pizza-interface";

export class ClamPizza implements PizzaInterface {
    prepare() {
        console.log('clam piza prepared!');
    }
    bake() {
        console.log('clam piza baked!');
    }
    cut() {
        console.log('clam piza cutted!');
    }
    box() {
        console.log('clam piza boxed!');
    }
}
