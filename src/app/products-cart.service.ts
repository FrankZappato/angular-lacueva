import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsCartService {  
  
  private _cartList : Product[] = [];
  cartList : BehaviorSubject <Product[]> = new BehaviorSubject([]);
  
  constructor() { }

  addToCart(product: Product) {
    let item : Product =  this._cartList.find((v1)=>v1.name == product.name) //Me fijo si el producto ya esta en la lista
    if(item){
      item.quantity += product.quantity;
    }else{
      this._cartList.push({...product});
    }
    this.cartList.next(this._cartList);    
  }

}
