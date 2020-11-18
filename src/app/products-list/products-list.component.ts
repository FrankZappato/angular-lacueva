import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products : Product []= [
  {
    name : "Ryzen",
    category : "Processor",
    price : 2300,
    stock : 0,
    image : "assets/img/ryzen-7.jpg",
    clearance : false,
    quantity : 0,
  },
  {
    name : "Microphone Shure",
    category : "Microphone",
    price : 750,
    stock : 12,
    image : "assets/img/ryzen-7.jpg",
    clearance : true,
    quantity : 0,
  },
  {
    name : "Ram Memory Corsair",
    category : "Ram memory",
    price : 1250,
    stock : 18,
    image : "assets/img/ryzen-7.jpg",
    clearance : false,
    quantity : 0,
  },
  {
    name : "Ram Memory Corsair",
    category : "Ram memory",
    price : 1250,
    stock : 18,
    image : "assets/img/ryzen-7.jpg",
    clearance : false,
    quantity : 0,
  },    
];
  constructor() { }

  ngOnInit(): void {
  }
  downQuantity(product : Product) : void{
    if(product.quantity > 0)
    product.quantity --;
  }
  upQuantity(product : Product) : void{
    if(product.quantity < product.stock)
    product.quantity ++;
  }
  onChangeQuantity(event, product : Product) : void{
    if(!(event.key >= 0) && (event.key <= 9))
      event.preventDefault();
  }

}
