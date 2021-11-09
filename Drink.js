import { Food } from "./Food.js";

export class Drink extends Food {
   static COLA = {
      tugrik: 50,
      calories: 40,
      type: "cola"
   }

   static COFFEE = {
      tugrik: 80, 
      calories: 20,
      type: "coffee"
   }

   constructor (drink) {
      super(null, drink.type, drink.tugrik, drink.calories);
   }
}