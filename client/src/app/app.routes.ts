import { AccountModule } from './account/account-module';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFound } from './core/not-found/not-found';
import { ServerError } from './core/server-error/server-error';

export const routes: Routes = [
    {path:"", component:HomeComponent}, 
    {path:"store", loadChildren:()=>import('./store/store-module').then(m=>m.StoreModule)}, 
    {path:"basket", loadChildren:()=>import('./basket/basket-module').then(m=>m.BasketModule)}, 
    {path:"account", loadChildren:()=>import('./account/account-module').then(m=>m.AccountModule)}, 
    {path:"checkout", loadChildren:()=>import('./checkout/checkout-module').then(m=>m.CheckoutModule)}, 
    {path:"not-found", component:NotFound}, 
    {path:"server-error", component:ServerError}, 
    {path:"**", redirectTo:"", pathMatch:'full'}, 
];
