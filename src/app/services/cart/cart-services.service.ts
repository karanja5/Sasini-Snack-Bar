import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {
  private myCart: Cart = new Cart();
  constructor() { }

  changeQuantity(foodId: number, quantity: number){
    let item = this.myCart.items.find(i => i.food.id === foodId);
    if(!item) return;
    item.quantity = quantity;
  }

  addToCart(food: Food): void{
    let item = this.myCart.items.find(i => i.food.id === food.id);
    if(item){
      this.changeQuantity(food.id, item.quantity + 1);
      return;
    }
    else{
      this.myCart.items.push(new CartItem(food));
    }

  }

  removeFromCart(foodId: number): void{
    this.myCart.items = this.myCart.items.filter(i => i.food.id !== foodId);
  }

  getCart(): Cart{
    return this.myCart;
  }

}
