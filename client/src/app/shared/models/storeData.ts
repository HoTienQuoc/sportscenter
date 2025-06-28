import { Brand } from "./brand";
import { Product } from "./product";
import { Type } from "./type";

export interface StoreData{
    products: Product[];
  brands: Brand[];
  types: Type[];

  selectedBrand: Brand | null;
  selectedType: Type | null;
  selectedSort: string; // default value
  search: string;

  currentPage:number;
  pageSize:number;
  totalPages:number;
}