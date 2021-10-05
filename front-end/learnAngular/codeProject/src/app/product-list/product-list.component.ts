import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  products = [
    {
      img: 'https://via.placeholder.com/200x150',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      price: '$5.99',
      quantity: 2,
    },
    {
      img: 'https://via.placeholder.com/200x150',
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      price: '$9.99',
      quantity: 1,
    },
  ];
}
