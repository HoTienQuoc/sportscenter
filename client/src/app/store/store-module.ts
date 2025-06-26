import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from './store';
import { ProductItem } from './product-item/product-item';
import { SharedModule } from '../shared/shared-module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, Store, ProductItem
  ],
  exports: [Store]

})
export class StoreModule { }
