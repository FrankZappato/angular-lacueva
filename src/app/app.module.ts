import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';


import { FormsModule } from '@angular/forms';
import { ThecaveAboutComponent } from './thecave-about/thecave-about.component';
import { ThecaveProductsComponent } from './thecave-products/thecave-products.component';
import { ThecaveCartComponent } from './thecave-cart/thecave-cart.component';
import { InputQuantityComponent } from './input-quantity/input-quantity.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ThecaveAboutComponent,
    ThecaveProductsComponent,
    ThecaveCartComponent,
    InputQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,           
    FormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
