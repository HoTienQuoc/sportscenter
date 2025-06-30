import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Store } from './store/store';
import { ProductDetails } from './store/product-details/product-details';
import { NotFound } from './core/not-found/not-found';
import { ServerError } from './core/server-error/server-error';

export const routes: Routes = [
    {path:"", component:HomeComponent}, 
    {path:"store", loadChildren:()=>import('./store/store-module').then(m=>m.StoreModule)}, 
    {path:"not-found", component:NotFound}, 
    {path:"server-error", component:ServerError}, 
    {path:"**", redirectTo:"", pathMatch:'full'}, 
];
