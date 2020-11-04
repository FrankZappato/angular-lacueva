import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  product = {
    "name" : "Ryzen",
    "category" : "Processor",
    "price" : 2300,
    "stock": 7,
    "image" : "assets/img/ryzen-7.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
