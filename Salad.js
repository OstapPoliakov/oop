import { Food } from "./Food.js";

export class Salad extends Food {
   static CAESAR = {
      tugrik: 100,
      calories: 20,
      type: "caesar"
   }

   static OLIVIER = {
      tugrik: 50,
      calories: 80,
      type: "olivier"
   }
   
   constructor (weigth, salad) {
      const refWeight = 100;
      const totalPrice = (salad.tugrik * weigth) / refWeight;
      const totalCalories = (salad.calories * weigth) / refWeight;
      super(weigth, salad.type, totalPrice, totalCalories);
   }
}