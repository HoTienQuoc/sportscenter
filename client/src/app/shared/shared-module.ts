import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummary } from './components/order-summary/order-summary';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, OrderSummary, ReactiveFormsModule
  ],
  exports:[OrderSummary,ReactiveFormsModule, FormsModule]
})
export class SharedModule { }
