import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../../../products/models/product.model';
import {CommunicateService} from '../../../products/services/communicate/communicate.service';
import {Subscription} from 'rxjs';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit, OnDestroy {

  selectedProducts: ProductModel[] = [];
  uniqueProducts: ProductModel[] = [];
  totalProductsCount = 0;
  totalProductsPrice = 0;
  private sub: Subscription;
  private sub2: Subscription;

  constructor(private communicateService: CommunicateService, public cartService: CartService) {
  }

  onAdd(prod): void {
    this.communicateService.publishData(prod);
  }

  onRemove(prod): void {
    this.communicateService.publishData2(prod);
  }

  ngOnInit(): void {
    this.sub = this.communicateService.channel$.subscribe(
      data => {
        this.selectedProducts = this.cartService.addProduct(this.selectedProducts, data);
        this.uniqueProducts = this.cartService.getUniqueList(this.selectedProducts);
        this.totalProductsCount = this.cartService.getTotalItemsCount(this.selectedProducts);
        this.totalProductsPrice = this.cartService.getTotalPrice(this.selectedProducts);
      });

    this.sub2 = this.communicateService.channel2$.subscribe(
      data => {
        this.selectedProducts = this.cartService.removeProduct(this.selectedProducts, data);
        this.uniqueProducts = this.cartService.getUniqueList(this.selectedProducts);
        this.totalProductsCount = this.cartService.getTotalItemsCount(this.selectedProducts);
        this.totalProductsPrice = this.cartService.getTotalPrice(this.selectedProducts);
      });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }


}
