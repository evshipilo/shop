import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  // providers: [ProductsService]
})
export class ProductListComponent {
  @Input() clear: boolean;

  // экземпляр класса в кемелкейсе с нижнего регистра
  products: Product[] = this.productsService.getProducts();

  constructor(public productsService: ProductsService) {
  }

  trackByFn(index, item): number {
    return index;
  }

}
