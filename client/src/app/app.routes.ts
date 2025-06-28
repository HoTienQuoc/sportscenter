import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Store } from './store/store';
import { ProductDetails } from './store/product-details/product-details';

export const routes: Routes = [
    {path:"", component:HomeComponent}, 
    {path:"store", component:Store}, 
    {path:"store/:id", component:ProductDetails}, 
    {path:"**", redirectTo:"", pathMatch:'full'}, 
];
