import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products-list/product';

const URL = 'url para el servicio api';//Aca iria una url para un servicio api 

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http : HttpClient) { }

  public getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(URL);
  }
}
