import { PizzaStore } from "./pizza-store";
import { PizzaInterface } from "./pizza-interface";
import { NyStyleCheesePizza, NyStylePepperoniPizza, NyStyleClamPizza, NyStyleVeggiePizza } from './ny-style-pizza';

export class NyStylePizzaStore extends PizzaStore {
    createPizza(type): PizzaInterface {
        let pizza: PizzaInterface;
        if (type === 'cheese') {
            pizza = new NyStyleCheesePizza();
        } else if (type === 'pepperoni') {
            pizza = new NyStylePepperoniPizza();
        } else if (type === 'clam') {
            pizza = new NyStyleClamPizza();
        } else if (type === 'veggie') {
            pizza = new NyStyleVeggiePizza();
        }
        return pizza;
    }
}
