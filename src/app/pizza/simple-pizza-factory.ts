import { PizzaInterface } from "./pizza-interface";
import { CheesePizza } from './cheese-pizza';
import { GreekPizza } from './greek-pizza';
import { PepperoniPizza } from './pepperoni-pizza';
import { VeggiePizza } from './veggie-pizza';
import { ClamPizza } from './clam-pizza';

export class SimplePizzaFactory {
    createPizza(type: string): PizzaInterface {
        let pizza: PizzaInterface;
        if (type === 'cheese') {
            pizza = new CheesePizza();
        } else if (type === 'pepperoni') {
            pizza = new PepperoniPizza();
        } else if (type === 'clam') {
            pizza = new ClamPizza();
        } else if (type === 'veggie') {
            pizza = new VeggiePizza();
        }
        return pizza;
    }
}
