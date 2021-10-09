import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [
    { id: 1, productId: 1, productName: 'sp1', qty: 4, price: 100 },
    { id: 2, productId: 2, productName: 'sp2', qty: 2, price: 200 },
    { id: 3, productId: 3, productName: 'sp3', qty: 2, price: 200 },
    { id: 4, productId: 4, productName: 'sp4', qty: 2, price: 100 },
  ];
  cartTotal = 0;
  constructor() {}

  ngOnInit(): void {
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
