import { Component, input, OnInit } from '@angular/core';
import { StoreService } from './store.service';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-store',
  imports: [],
  templateUrl: './store.html',
  styleUrl: './store.scss'
})
export class Store implements OnInit{
  constructor(private storeService: StoreService){}
  products: Product[] = [];
  title = input<string>("");

  ngOnInit(): void {
    this.storeService.getProducts().subscribe({
      next: (data)=>{
        this.products = data.content;
      },
      error:(error)=>{
        console.log("Error fetching data: ",error);
      }
    });
  }
}
