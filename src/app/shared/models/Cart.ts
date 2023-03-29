import { CartItem } from './CartItem';
export class Cart{
  items: CartItem[] = [];
  get totalPrice() : number{
    let sum = 0;
    this.items.forEach(item => {
      sum += item.price;
    });
    return sum;
  }
}
