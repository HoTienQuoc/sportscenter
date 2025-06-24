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
  selectedBrand: Brand | null = null;
  selectedType: Type | null = null;


  title = input<string>("");

  ngOnInit(): void {
    //initialize selected Brand and Type
    this.selectedBrand = null;
    this.selectedType = null;

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

  selectBrand(brand: Brand){
    //update the selected brand and fetch the products
    this.selectedBrand = brand; 
    this.fetchProducts();
  }

  selectType(type: Type){
    //update the selected type and fetch the products
    this.selectedType = type; 
    this.fetchProducts();
  }
}

