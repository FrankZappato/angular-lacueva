import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductsCartService } from '../products-cart.service';
import { Product } from '../products-list/product';

@Component({
  selector: 'app-thecave-cart',
  templateUrl: './thecave-cart.component.html',
  styleUrls: ['./thecave-cart.component.css']
})
export class ThecaveCartComponent implements OnInit {
  
  cartList$ : Observable<Product []>;

  constructor(private cart :ProductsCartService) { 
    this.cartList$ = cart.cartList.asObservable();    
  }

  ngOnInit(): void {
  }

}
