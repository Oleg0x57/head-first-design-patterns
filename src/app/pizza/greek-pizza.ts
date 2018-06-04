import { PizzaInterface } from "./pizza-interface";

export class GreekPizza implements PizzaInterface {
    prepare() {
        console.log('greek piza prepared!');
    }
    bake() {
        console.log('greek piza baked!');
    }
    cut() {
        console.log('greek piza cutted!');
    }
    box() {
        console.log('greek piza boxed!');
    }
}
