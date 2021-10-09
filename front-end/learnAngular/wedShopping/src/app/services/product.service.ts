import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'product 1', 'this is a product 1', 100),
    new Product(
      2,
      'product 2',
      'this is a product 2',
      200,
      'https://www.lg.com/vn/images/tivi/md07537746/md07537746-350x350.jpg'
    ),
    new Product(
      3,
      'product 3',
      'this is a product 3',
      200,
      'https://cf.shopee.vn/file/6a112dfc566163b8b2245d1d96185f65_tn'
    ),
    new Product(
      4,
      'product 4',
      'this is a product 4',
      100,
      'https://tuvanmuasam.com/wp-content/uploads/2020/08/Ipad-Mini-5-64gb-300x300.jpeg'
    ),
  ];
  constructor() {}
  getProducts(): Product[] {
    return this.products;
  }
}
