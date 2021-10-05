import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartSummaryComponent,
    PromoCodeComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
