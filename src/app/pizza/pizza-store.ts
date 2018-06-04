import { PizzaInterface } from "./pizza-interface";

export abstract class PizzaStore {
    pizza: PizzaInterface;
    orderPizza(type: string): PizzaInterface {
        this.pizza = this.createPizza(type);
        this.pizza.prepare();
        this.pizza.bake();
        this.pizza.cut();
        this.pizza.box();
        return this.pizza;
    }
    abstract createPizza(type: string): PizzaInterface;
}
