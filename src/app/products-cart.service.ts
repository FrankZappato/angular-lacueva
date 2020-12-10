import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  deleteFromCart(product: Product): void{
    let item : Product =  this._cartList.find((v1)=>v1.name == product.name);
    this.removeByAttr(this._cartList,'name',item.name,);
  }
  removeByAttr(arr, attr, value) {
    let i = arr.length;
    while (i--) { //if i > 0 true
        if (arr[i] &&
            arr[i].hasOwnProperty(attr) && // if the object has the property ( boolean )
            (arguments.length > 2 && arr[i][attr] === value)) {//chequeo si estan seteados atr, arr y value y si los valores coinciden los elimino.

            arr.splice(i, 1);  
          }
        }
        return arr;
    }      
}
    
