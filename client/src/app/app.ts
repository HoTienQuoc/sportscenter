import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './shared/models/product';
import { ProductData } from './shared/models/productData';
import { CoreModule } from './core/core-module';
import { StoreModule } from './store/store-module';

@Component({
  selector: 'app-root',
  imports: [CoreModule, StoreModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected title = 'Sports Center';
  products: Product[] = [];
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http
      .get<ProductData>("http://localhost:8080/api/products")
      .subscribe({
        next: (data)=>{
          this.products = data.content;
        },
        error:(error)=>{
          console.log("Error fetching data: ",error);
        }
      });
  }
}


