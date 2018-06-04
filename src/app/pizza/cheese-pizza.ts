import { PizzaInterface } from "./pizza-interface";

export class CheesePizza implements PizzaInterface {
    prepare() {
        console.log('cheese piza prepared!');
    }
    bake() {
        console.log('cheese piza baked!');
    }
    cut() {
        console.log('cheese piza cutted!');
    }
    box() {
        console.log('cheese piza boxed!');
    }
}
