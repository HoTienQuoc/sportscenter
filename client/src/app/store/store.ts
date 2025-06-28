import { Component, OnInit, input } from '@angular/core';
import { Brand } from '../shared/models/brand';
import { Product } from '../shared/models/product';
import { StoreService } from './store.service';
import { Type } from '../shared/models/type';
import { FormsModule } from '@angular/forms';
import { ProductItem } from "./product-item/product-item";
import { StoreModelService } from './store.model.service';

@Component({
  selector: 'app-store',
  imports: [FormsModule, ProductItem],

  templateUrl: './store.html',
  styleUrls: ['./store.scss']
})
export class Store implements OnInit {
  title = input<string>("");

  // products: Product[] = [];
  // brands: Brand[] = [];
  // types: Type[] = [];

  // selectedBrand: Brand | null = { id: 0, name: 'All' };
  // selectedType: Type | null = { id: 0, name: 'All' };
  // selectedSort = 'asc'; // default value
  // search = '';

  // currentPage = 0;
  // pageSize = 5;
  // totalPages = 0;

  constructor(private storeService: StoreService, public storeData: StoreModelService) {}

  ngOnInit(): void {
    this.getBrands();
    this.getTypes();
    this.fetchProducts();
  }
  goToPage(page: number): void {
    if (this.storeData.currentPage >= 0 && page < this.storeData.totalPages) {
      this.storeData.currentPage = page;
      this.fetchProducts();
    }
  }
  
  previousPage(): void {
    if (this.storeData.currentPage > 0) {
      this.storeData.currentPage--;
      this.fetchProducts();
    }
  }
  
  nextPage(): void {
    if (this.storeData.currentPage < this.storeData.totalPages - 1) {
      this.storeData.currentPage++;
      this.fetchProducts();
    }
  }
  

  fetchProducts(): void {
    const brandId = this.storeData.selectedBrand?.id;
    const typeId = this.storeData.selectedType?.id;
    const keyword = this.storeData.search;
    const sort = 'name'; // hoặc lấy từ biến nếu có thay đổi
    const order = this.storeData.selectedSort || 'asc';

    this.storeService
      .getProducts(brandId, typeId, this.storeData.currentPage, this.storeData.pageSize, keyword, sort, order)
      .subscribe({
        next: (data) => {
          this.storeData.products = data.content;
          this.storeData.totalPages = data.totalPages;
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        }
      });
  }

  getBrands(): void {
    this.storeService.getBrands().subscribe({
      next: (response) => (this.storeData.brands = [{ id: 0, name: 'All' }, ...response]),
      error: (error) => console.log(error)
    });
  }

  getTypes(): void {
    this.storeService.getTypes().subscribe({
      next: (response) => (this.storeData.types = [{ id: 0, name: 'All' }, ...response]),
      error: (error) => console.log(error)
    });
  }

  selectBrand(brand: Brand): void {
    this.storeData.selectedBrand = brand;
    this.storeData.currentPage = 0;
    this.fetchProducts();
  }

  selectType(type: Type): void {
    this.storeData.selectedType = type;
    this.storeData.currentPage = 0;
    this.fetchProducts();
  }

  onSortChange(): void {
    this.storeData.currentPage = 0;
    this.fetchProducts();
  }

  onSearch(): void {
    this.storeData.currentPage = 0;
    this.fetchProducts();
  }

  onReset(): void {
    this.storeData.search = '';
    this.storeData.currentPage = 0;
    this.fetchProducts();
  }

}
