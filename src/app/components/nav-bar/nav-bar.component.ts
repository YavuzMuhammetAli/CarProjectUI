import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  cartItems: CartItem[] = [];
  
  constructor(
    private cartService: CartService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(car: CarDetail) {
    this.cartService.removeFromCart(car);
    this.toastrService.error(car.brandName + ' sepetten silindi', 'SİLİNDİ');
  }
}
