import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/product/products.service';
import {CommunicateService} from '../../services/communicate/communicate.service';
import {Observable} from 'rxjs';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: []
})
export class ProductListComponent{

  // ngOnInit() {
  //   this.productsService.products.subscribe(prod => {
  //     this.products = prod
  //   })
  // }

  constructor(public productsService: ProductsService,
              // public communicateService: CommunicateService,
              private cartService: CartService) {
  }

  products: ProductModel[] = this.productsService.getProducts();



  trackByFn(index, item): number {
    return index;
  }

  onClick(prod): void {
    // this.communicateService.publishData(prod);
    this.cartService.addProduct(prod);

  }

}
