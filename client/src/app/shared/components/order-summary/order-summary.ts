import { Component } from '@angular/core';
import { BasketService } from '../../../basket/basket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  imports: [CommonModule],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.scss'
})
export class OrderSummary {
  constructor(public basketService: BasketService){}

}
