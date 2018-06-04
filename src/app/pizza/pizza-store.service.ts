import { Injectable } from '@angular/core';
import { PizzaInterface } from './pizza-interface';
import { SimplePizzaFactory } from './simple-pizza-factory';

@Injectable({
  providedIn: 'root'
})
export class PizzaStoreService {
  pizza: PizzaInterface;
  constructor(private pizaFactory: SimplePizzaFactory) { }
  orderPizza(type: string): PizzaInterface {
    this.pizza = this.pizaFactory.createPizza(type);
    this.pizza.prepare();
    this.pizza.bake();
    this.pizza.cut();
    this.pizza.box();
    return this.pizza;
  }
}
