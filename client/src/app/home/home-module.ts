import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HomeComponent,SharedModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
