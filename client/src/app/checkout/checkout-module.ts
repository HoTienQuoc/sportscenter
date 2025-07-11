import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout-routing-module';
import { SharedModule } from '../shared/shared-module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, CheckoutRoutingModule, SharedModule
  ]
})
export class CheckoutModule { }
