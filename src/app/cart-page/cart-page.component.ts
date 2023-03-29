import { Component, OnInit } from '@angular/core';
import { CartServicesService } from '../services/cart/cart-services.service';
import { FoodServicesService } from '../services/food/food-services.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!: Cart;

  constructor( private cartService : CartServicesService) {
    this.setCart();
  }

  ngOnInit(): void {
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart( item : CartItem ){
    this.cartService.removeFromCart(item.food.id);
    this.setCart();
  }
  changeQuantity( item : CartItem, quantityInString : string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(item.food.id, quantity);
    this.setCart();
   }


}


