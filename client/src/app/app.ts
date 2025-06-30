import { Component } from '@angular/core';
import { CoreModule } from './core/core-module';
import { StoreModule } from './store/store-module';
import { HomeModule } from './home/home-module';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [CoreModule,StoreModule,HomeModule, RouterOutlet,RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'Sports Center';
  constructor(){}
  ngOnInit(){
    
  }
}


