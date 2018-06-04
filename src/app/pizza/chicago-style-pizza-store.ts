import { PizzaStore } from "./pizza-store";
import { PizzaInterface } from "./pizza-interface";
import { ChicagoStyleCheesePizza, ChicagoStylePepperoniPizza, ChicagoStyleClamPizza, ChicagoStyleVeggiePizza } from './chicago-style-pizza';

export class ChicagoStylePizzaStore extends PizzaStore {
    createPizza(type): PizzaInterface {
        let pizza: PizzaInterface;
        if (type === 'cheese') {
            pizza = new ChicagoStyleCheesePizza();
        } else if (type === 'pepperoni') {
            pizza = new ChicagoStylePepperoniPizza();
        } else if (type === 'clam') {
            pizza = new ChicagoStyleClamPizza();
        } else if (type === 'veggie') {
            pizza = new ChicagoStyleVeggiePizza();
        }
        return pizza;
    }
}
