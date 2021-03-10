import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../../../products/models/product.model';
import {CommunicateService} from '../../../products/services/communicate/communicate.service';
import {Subscription} from 'rxjs';
import {CartService} from '../../services/cart.service';
import {CartObservableService} from "../../services/cart-observable.service";


@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  // private sub2: Subscription;

  sortKeys = ['price', 'count', 'name'];
  selectedValue: string;
  sortType = false;

  constructor(
    // private communicateService: CommunicateService,
    // private cartObservableService: CartObservableService,
    public cartService: CartService) {
  }

  onAdd(prod: ProductModel): void {
    // this.cartObservableService.addProduct(prod).subscribe(
    //   data=>{
    //     this.cartObservableService.getCartProducts().subscribe(
    //       data => this.cartService.setCardProducts(data))
    //   }
    // )
     this.cartService.addProduct(prod);
  }

  onRemove(prod: ProductModel): void {
    this.cartService.removeProduct(prod);
  }

  ngOnInit(): void {
    // this.sub = this.cartObservableService.getCartProducts().subscribe(
    //   data => this.cartService.setCardProducts(data));
    this.cartService.updateCartData()
  }

  ngOnDestroy(): void {
     // this.sub.unsubscribe();
    // this.sub2.unsubscribe();
  }

  onChange(): void{
    this.sortType = !this.sortType;
  }


}
