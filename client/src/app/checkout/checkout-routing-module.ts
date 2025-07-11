import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { canActivate } from '../core/guards/auth-guard';
import { AddressComponent } from './address/address.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { ReviewComponent } from './review/review.component';
import { Router } from 'express';

const routes: Routes = [
  {
    path:'', 
    component: CheckoutComponent,
    canActivate: [canActivate],
    children: [
      {path: 'address', component: AddressComponent},
      {path: 'shipment', component: ShipmentComponent},
      {path: 'review', component: ReviewComponent},
      {path: '', redirectTo: 'address', pathMatch: 'full'} //deafulting to address step
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
