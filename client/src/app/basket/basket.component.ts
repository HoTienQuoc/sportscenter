import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';
import { Basket, BasketItem } from '../shared/models/basket';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared-module";

@Component({
  selector: 'app-basket.component',
  imports: [CommonModule, SharedModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})

export class BasketComponent implements OnInit {
  basket: Basket | null = new Basket();
  constructor(public basketService: BasketService){}
  
  ngOnInit() {
    this.basketService.basketSource$.subscribe((basket)=>{
      this.basket = basket;
    });
  }

  extractImageName(item: BasketItem): string | null{
    if(item && item.pictureUrl){
      const parts = item.pictureUrl.split('/');
      if(parts.length>0){
        return parts[parts.length-1]; 
      }
    }
    return null;
  }
  
  incrementQuantity(itemId: number){
    this.basketService.incrementItemQuantity(itemId);
  }
  
  decrementQuantity(itemId: number){
    this.basketService.decrementItemQuantity(itemId);
  }

  removeItem(itemId: number){
    this.basketService.remove(itemId);
  }
}