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
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    
  }
}


