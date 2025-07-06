import { BasketComponent } from './basket.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module';
import { BasketRoutingModule } from './basket-routing-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, BasketComponent
  ],
  exports: [BasketComponent,BasketRoutingModule,SharedModule]
})
export class BasketModule { }
