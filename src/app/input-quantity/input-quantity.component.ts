import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products-list/product';

@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.css']
})
export class InputQuantityComponent implements OnInit {

  constructor() { }

  @Input()
  quantity : number;
  @Input()
  max : number;
  @Output()
  quantityChange : EventEmitter<number> = new EventEmitter<number>();
  @Output()
  maxReached : EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  downQuantity() : void{
    if(this.quantity > 0){
      this.quantity --;
      this.quantityChange.emit(this.quantity);
    }
  }
  upQuantity() : void{
    if(this.quantity < this.max){
      this.quantity ++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("Se alcanzo el maximo de unidades");
    }
  }
  onChangeQuantity(event) : void{
    if((event.key >= 0) && (event.key <= this.max)){      
      event.preventDefault();
      this.quantity = event.key;
      this.quantityChange.emit(this.quantity);
    }
  }
}
