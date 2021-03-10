import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/product/products.service';
import {CommunicateService} from '../../services/communicate/communicate.service';
import {Observable} from 'rxjs';
import {CartService} from '../../../cart/services/cart.service';
import {CartObservableService} from "../../../cart/services/cart-observable.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: []
})
export class ProductListComponent{

  products: ProductModel[]

  async ngOnInit() {
    this.products = await this.productsService.getProducts();
  }

  constructor(public productsService: ProductsService,
              private cartObservableService: CartObservableService,
              private cartService: CartService) {
  }



  // products: ProductModel[] = this.productsService.getProducts();



  trackByFn(index, item): number {
    return index;
  }

  onClick(prod): void {
    // this.communicateService.publishData(prod);
    this.cartService.addProduct(prod);
    // this.cartObservableService.addProduct(prod).subscribe(
    //   data=>{
    //     this.cartObservableService.getCartProducts().subscribe(
    //       data => this.cartService.setCardProducts(data))
    //   }
    // )

  }

}
