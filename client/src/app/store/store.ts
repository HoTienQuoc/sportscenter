import { Component, input, OnInit } from '@angular/core';
import { Brand } from '../shared/models/brand';
import { Product } from '../shared/models/product';
import { StoreService } from './store.service';
import { Type } from '../shared/models/type';
import { FormsModule } from '@angular/forms';
import { ProductItem } from "./product-item/product-item";

@Component({
  selector: 'app-store',
  imports: [FormsModule, ProductItem],
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
  selectedSort = 'asc'; //default value
  search = '';



  title = input<string>("");

  ngOnInit(): void {
    // Initialize selected brand and type to "All"
    this.selectedBrand = { id: 0, name: 'All' };
    this.selectedType = { id: 0, name: 'All' };

    // Check if both selectedBrand and selectedType are "All" before making the initial fetch
    if (this.selectedBrand.id === 0 && this.selectedType.id === 0) {
      this.fetchProducts(); // Fetch all records without brand and type filtering
    } else {
      // Fetch products with the selected brand and type
      this.fetchProducts();
    }
    this.getBrands();
    this.getTypes();
  }

  fetchProducts(){
    //Pass the selected brand/type ids
    const brandId = this.selectedBrand?.id;
    const typeId = this.selectedType?.id;

    //construct the base url
    let url = `${this.storeService.apiUrl}?`;

    //check the brand and type
    if(brandId && brandId !==0){
      url+= `brandId=${brandId}&`;
    }

    if(typeId && typeId !==0){
      url+= `typeId=${typeId}&`;
    }

    if(this.selectedSort){
      url+= `sort=name&order=${this.selectedSort}&`;
    }

    //search 
    if(this.search){
      url+= `keyword=${this.search}&`;
    }

    // Remove the trailing '&' if it exists
    if (url.endsWith('&')) {
      url = url.slice(0, -1);
    }  

    this.storeService.getProducts(brandId, typeId, url).subscribe({
      next: (data) => {
        this.products = data.content;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
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
    //update the selected brand and fetch the products
    this.selectedType = type;
    this.fetchProducts();
  }
  onSortChange(){
    this.fetchProducts();
  }
  onSearch(){
    this.fetchProducts();
  }
  onReset(){
    this.search = '';
    this.fetchProducts();
  }
}

