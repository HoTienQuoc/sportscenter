import { Component } from '@angular/core';
import { CoreModule } from './core/core-module';
import { StoreModule } from './store/store-module';

@Component({
  selector: 'app-root',
  imports: [CoreModule,StoreModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{
  protected title = 'Sports Center';
  constructor(){}
  ngOnInit(){
    
  }
}


