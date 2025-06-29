import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBar } from './nav-bar/nav-bar';
import { RouterModule } from '@angular/router';
import { NotFound } from './not-found/not-found';
import { ServerError } from './server-error/server-error';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,NavBar,NotFound,ServerError,RouterModule,
  ],
  exports: [NavBar,NotFound,ServerError]
})
export class CoreModule { }
