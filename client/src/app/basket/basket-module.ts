import { BasketComponent } from './basket.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, BasketComponent
  ],
  exports: [BasketComponent]
})
export class BasketModule { }
