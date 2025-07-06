import { Component } from '@angular/core';
import { CoreModule } from './core/core-module';
import { StoreModule } from './store/store-module';
import { HomeModule } from './home/home-module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BasketModule } from './basket/basket-module';


@Component({
  selector: 'app-root',
  imports: [CoreModule,StoreModule,HomeModule, RouterOutlet,RouterModule, BasketModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'Sports Center';
  constructor(){}
  ngOnInit(){
    
  }
}


