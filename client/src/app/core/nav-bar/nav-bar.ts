import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { BasketItem } from '../../shared/models/basket';
import { BasketService } from '../../basket/basket.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterModule, AsyncPipe],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  constructor(public basketService: BasketService){}

  getItemsCount(items: BasketItem[]){
    return items.reduce((sum, item)=>sum+item.quantity, 0);
  }
}
