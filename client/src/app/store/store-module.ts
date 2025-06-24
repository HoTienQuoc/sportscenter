import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from './store';
import { ProductItem } from './product-item/product-item';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, Store, ProductItem
  ],
  exports: [Store, ProductItem]

})
export class StoreModule { }
