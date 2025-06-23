import { Injectable } from '@angular/core';
import { ProductData } from '../shared/models/productData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private http: HttpClient) { }

  public apiUrl = 'http://localhost:8080/api/products';

  getProducts(): Observable<ProductData>{
    return this.http.get<ProductData>(this.apiUrl);
  }
}
