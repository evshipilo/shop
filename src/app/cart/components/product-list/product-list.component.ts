import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsService]
})
export class ProductListComponent {
  @Input() clear: boolean;

  products: Product[] = this.Products.getProducts();

  constructor(public Products: ProductsService) {
  }

  trackByFn(index, item): number {
    return index;
  }

}
