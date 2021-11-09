export class Food {
   constructor (size, type, price, calories) {
      this.size = size;
      this.type = type;
      this.price = price;
      this.calories = calories;
   }

   get getSize() {
      return this.size;
   }

   get getType() {
      return this.type;
   }
   
   get calculatePrice() {
      return this.price;
   }

   get calculateCalories() {
      return this.calories;
   }
}