import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/product/products.service';
import {CommunicateService} from '../../services/communicate/communicate.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsService]
})
export class ProductListComponent {

  products: Observable<any> = this.productsService.getProducts();

  constructor(public productsService: ProductsService, public communicateService: CommunicateService) {
  }

  trackByFn(index, item): number {
    return index;
  }

  onClick(prod): void {
    this.communicateService.publishData(prod);
  }

}
