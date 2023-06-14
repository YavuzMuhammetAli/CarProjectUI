import { Injectable } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CartItem } from 'src/app/models/cartItem';
import { CartItems } from 'src/app/models/cartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cartItem:CartItem[]=[];

  addToCart(car: CarDetail) {
    let item = CartItems.find((c) => c.car.carId === car.carId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
      this.cartItem.push(cartItem);
    }
  }

  removeFromCart(car: CarDetail) {
    let item = CartItems.find((c) => c.car.carId === car.carId);
    CartItems.splice(CartItems.indexOf(item), 1);
  }

  list(): CartItem[] {
    return CartItems;
    
  }
}
