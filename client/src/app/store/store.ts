import { Component, input, OnInit } from '@angular/core';
import { Brand } from '../shared/models/brand';
import { Product } from '../shared/models/product';
import { StoreService } from './store.service';
import { Type } from '../shared/models/type';

@Component({
  selector: 'app-store',
  imports: [],
  templateUrl: './store.html',
  styleUrl: './store.scss'
})
export class Store implements OnInit{
  constructor(private storeService: StoreService){}
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];
  title = input<string>("");

  ngOnInit(): void {
    this.fetchProducts();
    this.getBrands();
    this.getTypes();
  }

  fetchProducts(){
    this.storeService.getProducts().subscribe({
      next: (data)=>{
        this.products = data.content;
      },
      error:(error)=>{
        console.log("Error fetching data: ",error);
      }
    });
  }

  getBrands(){
    this.storeService.getBrands().subscribe({
      next:(response)=>(this.brands = [{id: 0, name:'All'}, ...response]),
      error:(error) =>console.log(error)
    });
  }

  getTypes(){
    this.storeService.getTypes().subscribe({
      next:(response)=>(this.types = [{id: 0, name:'All'}, ...response]),
      error:(error) =>console.log(error)
    });
  }
}
