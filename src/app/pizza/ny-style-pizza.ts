import { PizzaInterface } from "./pizza-interface";

export class NyStyleClamPizza implements PizzaInterface {
    prepare() {
        console.log('clam piza prepared in Ny-style!');
    }
    bake() {
        console.log('clam piza baked in Ny-style!');
    }
    cut() {
        console.log('clam piza cutted in Ny-style!');
    }
    box() {
        console.log('clam piza boxed in Ny-style!');
    }
}

export class NyStyleCheesePizza implements PizzaInterface {
    prepare() {
        console.log('cheese piza prepared in Ny-style!');
    }
    bake() {
        console.log('cheese piza baked in Ny-style!');
    }
    cut() {
        console.log('cheese piza cutted in Ny-style!');
    }
    box() {
        console.log('cheese piza boxed in Ny-style!');
    }
}

export class NyStylePepperoniPizza implements PizzaInterface {
    prepare() {
        console.log('pepperoni piza prepared in Ny-style!');
    }
    bake() {
        console.log('pepperoni piza baked in Ny-style!');
    }
    cut() {
        console.log('pepperoni piza cutted in Ny-style!');
    }
    box() {
        console.log('pepperoni piza boxed in Ny-style!');
    }
}

export class NyStyleVeggiePizza implements PizzaInterface {
    prepare() {
        console.log('veggie piza prepared!');
    }
    bake() {
        console.log('veggie piza baked in Ny-style!');
    }
    cut() {
        console.log('veggie piza cutted in Ny-style!');
    }
    box() {
        console.log('veggie piza boxed in Ny-style!');
    }
}
