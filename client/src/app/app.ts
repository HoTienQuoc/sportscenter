import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavBar } from "./core/nav-bar/nav-bar";
import { Product } from './models/product';
import { ProductData } from './models/productData';
import { CoreModule } from './core/core-module';

@Component({
  selector: 'app-root',
  imports: [CoreModule],
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


