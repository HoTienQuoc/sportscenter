import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Store } from './store/store';
import { ProductDetails } from './store/product-details/product-details';

export const routes: Routes = [
    {path:"", component:HomeComponent}, 
    {path:"store", loadChildren:()=>import('./store/store-module').then(m=>m.StoreModule)}, 
    {path:"**", redirectTo:"", pathMatch:'full'}, 
];
