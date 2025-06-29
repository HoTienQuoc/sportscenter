import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from './store';
import { ProductItem } from './product-item/product-item';
import { SharedModule } from '../shared/shared-module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreRoutingModule } from './store-routing-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    Store, ProductItem, 
    RouterModule, SharedModule, 
    StoreRoutingModule
  ],
  exports: [Store]

})
export class StoreModule { }
