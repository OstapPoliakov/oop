//import { Food } from "./Food.js";

export class Order {
   constructor (...orderItems) {
      this.items = [...orderItems];
   }

   addItem(item) {
      try {
         this.items.push(item);
         return this;
      } catch (err) {
         return 'You cannot add more items in the order. The order has already been paid.';
      }
   }

   deleteItem(itemCount) {
      if (itemCount < 0 || itemCount > this.items.length) {
         return 'Incorrect number of items to remove.';
      }

      try {
         this.items.splice(-1 * itemCount, itemCount);
         return this;
      } catch (err) {
         return 'The order has already been paid or there are no items to remove.';
      }
   }

   getTotalPrice() {
      return this.items.reduce((acc, cur) => {
         return acc + cur.price;
      }, 0);
   }

   getTotalCalories() {
      return this.items.reduce((acc, cur) => {
         return acc + cur.calories;
      }, 0);
   }

   static _deepFreeze(obj) {
      Object.keys(obj).forEach(item => {
         if (typeof obj[item] === 'object' && !Object.isFrozen(obj[item])) {
            Order._deepFreeze(obj[item]);
         }
      });

      return Object.freeze(obj);
   }

   pay() {
      if (this.items.length == 0) {
         return 'You cannot pay for empty order.';
      }
      return Order._deepFreeze(this);
   }
}