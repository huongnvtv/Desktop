import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [
    // { id: 1, productId: 1, productName: 'sp1', qty: 4, price: 100 },
    // { id: 2, productId: 2, productName: 'sp2', qty: 2, price: 200 },
    // { id: 3, productId: 3, productName: 'sp3', qty: 2, price: 200 },
    // { id: 4, productId: 4, productName: 'sp4', qty: 2, price: 100 },
  ];
  cartTotal = 0;
  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }
  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    });
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
