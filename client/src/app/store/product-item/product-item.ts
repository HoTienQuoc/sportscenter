import { Component, input } from '@angular/core';
import { Product } from '../../shared/models/product';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss'
})
export class ProductItem {
  product = input<Product | null>(null);
  constructor(private basketService: BasketService){}

  additemToBasket(){
    this.product() && this.basketService.addItemToBasket(this.product()!);
  }

  //Method to extract the image name from pictureUrl
  extractImageName(): string | null {
    const product = this.product();
    if (product && product?.pictureUrl) {
      const parts = product.pictureUrl.split('/');
      return parts.length > 0 ? parts[parts.length - 1] : null;
    }
    return null; //if its invalid, then return null
  }
}
