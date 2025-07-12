import { Component, OnInit } from '@angular/core';
import { CoreModule } from './core/core-module';
import { StoreModule } from './store/store-module';
import { HomeModule } from './home/home-module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BasketModule } from './basket/basket-module';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';


@Component({
  selector: 'app-root',
  imports: [CoreModule,StoreModule,HomeModule, RouterOutlet,RouterModule, BasketModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit{
  protected title = 'Sports Center';
  constructor(
    private basketService: BasketService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.loadUser();
    this.loadBasket();
  }

  loadBasket(){
    const basketId = localStorage.getItem('basket_id');
    if (basketId) this.basketService.getBasket(basketId);
  }

  loadUser(){
    this.accountService.loadUser();
  }


}


