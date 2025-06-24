import { Component, input } from '@angular/core';
import { Product } from '../../shared/models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss'
})
export class ProductItem {
  product = input<Product | null>(null);

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
