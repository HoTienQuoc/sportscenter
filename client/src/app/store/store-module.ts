import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from './store';
import { FormsModule } from '@angular/forms';
import { ProductItem } from './product-item/product-item';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, Store, ProductItem
  ],
  exports: [Store]

})
export class StoreModule { }
