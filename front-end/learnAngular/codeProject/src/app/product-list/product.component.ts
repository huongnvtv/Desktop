import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  template: `
    <li class="row" style="margin: 40px 0;">
      <div class="col left">
        <div class="thumbnail">
          <a href="#">
            <img src="{{ productItem.img }}" alt="" />
          </a>
        </div>
        <div class="detail">
          <div class="name">
            <a href="#">{{ productItem.name }}</a>
          </div>
          <div class="description">{{ productItem.description }}</div>
          <div class="price">{{ productItem.price }}</div>
        </div>
      </div>

      <div class="col right">
        <div class="quantity">
          <input
            type="number"
            class="quantity"
            step="1"
            value="{{ productItem.quantity }}"
          />
        </div>

        <div class="remove">
          <svg
            version="1.1"
            class="close"
            xmlns="//www.w3.org/2000/svg"
            xmlns:xlink="//www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            enable-background="new 0 0 60 60"
            xml:space="preserve"
          >
            <polygon
              points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"
            ></polygon>
          </svg>
        </div>
      </div>
    </li>
  `,
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() productItem!: Product;
}
