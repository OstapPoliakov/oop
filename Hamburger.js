import { Food } from "./Food.js";

export class Hamburger extends Food {
   static SIZE_SMALL = {
      tugrik: 50,
      calories: 20,
      size: "small"
   }

   static SIZE_LARGE = {
      tugrik: 100,
      calories: 40,
      size: "large"
   }

   static STUFFING_CHEESE = {
      tugrik: 10,
      calories: 20,
      type: "cheese"
   }

   static STUFFING_SALAD = {
      tugrik: 20,
      calories: 5,
      type: "salad"
   }

   static STUFFING_POTATO = {
      tugrik: 15,
      calories: 10,
      type: "potato"
   }

   constructor (size, stuffing) {
      const totalPrice = size.tugrik + stuffing.tugrik;
      const totalCalories = size.calories + stuffing.calories;
      super(size.size, stuffing.type, totalPrice, totalCalories);
   }
}