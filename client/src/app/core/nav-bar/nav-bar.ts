import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { BasketItem } from '../../shared/models/basket';
import { BasketService } from '../../basket/basket.service';
import { AsyncPipe } from '@angular/common';
import { AccountService } from '../../account/account.service';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterModule, AsyncPipe],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  currentUser$?: Observable<User | null>;  

  constructor(
    public basketService: BasketService,    
    public accountService: AccountService
  ){}

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;  
  }

  getItemsCount(items: BasketItem[]){
    return items.reduce((sum, item)=>sum+item.quantity, 0);
  }

  logout() {
    this.accountService.logout();
  }
}
