import { Injectable } from '@angular/core';
import { ProductData } from '../shared/models/productData';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  getProducts(
    brandId?: number,
    typeId?: number,
    page: number = 0,
    size: number = 5,
    keyword?: string,
    sort?: string,
    order?: string
  ): Observable<ProductData> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (brandId && brandId !== 0) {
      params = params.set('brandId', brandId.toString());
    }

    if (typeId && typeId !== 0) {
      params = params.set('typeId', typeId.toString());
    }

    if (keyword && keyword.trim() !== '') {
      params = params.set('keyword', keyword.trim());
    }

    if (sort) {
      params = params.set('sort', sort);
    }

    if (order) {
      params = params.set('order', order);
    }

    return this.http.get<ProductData>(this.apiUrl, { params });
  }

  getBrands(): Observable<Brand[]> {
    const url = `${this.apiUrl}/brands`;
    return this.http.get<Brand[]>(url);
  }

  getTypes(): Observable<Type[]> {
    const url = `${this.apiUrl}/types`;
    return this.http.get<Type[]>(url);
  }
}
