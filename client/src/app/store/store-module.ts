import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from './store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, Store
  ],
  exports: [Store]

})
export class StoreModule { }
