import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Store } from './store';
import { ProductDetails } from './product-details/product-details';

const routes: Routes = [
  {path:'', component: Store},
  {path:":id", component: ProductDetails}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StoreRoutingModule { }
