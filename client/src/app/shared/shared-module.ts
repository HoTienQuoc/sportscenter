import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummary } from './components/order-summary/order-summary';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, OrderSummary
  ],
  exports:[OrderSummary]
})
export class SharedModule { }
