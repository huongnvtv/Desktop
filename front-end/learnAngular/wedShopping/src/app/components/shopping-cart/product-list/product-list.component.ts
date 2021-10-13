import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList!: Product[];
  constructor(
    private productService: ProductService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
      for (var i = 0; i < this.productList.length; i++) {
        let objectURL = '' + products[i].imgUrl;
        this.productList[i].imgUrl =
          this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }
    });
  }
}
