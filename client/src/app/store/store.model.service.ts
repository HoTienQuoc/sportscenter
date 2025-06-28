import { Injectable } from "@angular/core";
import { Brand } from "../shared/models/brand";
import { Product } from "../shared/models/product";
import { StoreData } from "../shared/models/storeData";
import { Type } from "../shared/models/type";

@Injectable({
  providedIn: 'root'
})
export class StoreModelService implements StoreData{
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];

  selectedBrand: Brand | null = { id: 0, name: 'All' };
  selectedType: Type | null = { id: 0, name: 'All' };
  selectedSort = 'asc'; // default value
  search = '';

  currentPage = 0;
  pageSize = 5;
  totalPages = 0;

}