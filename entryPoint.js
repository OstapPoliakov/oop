import { Hamburger } from "./Hamburger.js";
import { Salad } from "./Salad.js";
import { Drink } from "./Drink.js";
import { Order } from "./Order.js";

// Order example
const order = new Order();
const bigHamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
const drinkCoffee = new Drink(Drink.COFFEE);
const saladWeigth = 150;
const saladOlivier = new Salad(saladWeigth,Salad.OLIVIER);

console.log(`Hamburger size: ${bigHamburger.getSize}, stuffing: ${bigHamburger.getType}, price: ${bigHamburger.calculatePrice}, calories: ${bigHamburger.calculateCalories}`);
console.log(`Drink type: ${drinkCoffee.getType}, price: ${drinkCoffee.calculatePrice}, calories: ${drinkCoffee.calculateCalories}`);
console.log(`Salad type: ${saladOlivier.getType}, size: ${saladOlivier.getSize}g, price: ${saladOlivier.calculatePrice}, calories: ${saladOlivier.calculateCalories}`);
console.log(order);

// error
console.log(order.deleteItem(1));

console.log(order.addItem(drinkCoffee));
console.log(order.addItem(bigHamburger));
console.log(order.addItem(saladOlivier));

console.log('Total calories: ' + order.getTotalCalories());
console.log('Total price: ' + order.getTotalPrice());
console.log(order.pay());

// errors
console.log(order.addItem(drinkCoffee));
console.log(order.deleteItem(1));

console.log(order);