import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/product/products.service';
import {CommunicateService} from '../../services/communicate/communicate.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  // providers: [ProductsService] // он уже зарегистрирован через свой декоратор
})
export class ProductListComponent implements OnInit {

  // обычно так не делают
  products: ProductModel[]; //  = this.productsService.getProducts();

  constructor(
    public productsService: ProductsService,
    public communicateService: CommunicateService
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  trackByFn(index, item): number {
    return index;
  }

  onClick(prod): void {
    this.communicateService.publishData(prod);
    console.log('prod', prod);
  }

}
