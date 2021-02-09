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

  private sub: Subscription;

  sortKeys = ['price', 'count', 'name'];
  selectedValue: string;
  sortType = false;

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
      data => this.cartService.addProduct(data));

    const sub = this.communicateService.channel2$.subscribe(
      data => this.cartService.removeProduct(data));

    this.sub.add(sub);

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onChange(): void{
    this.sortType = !this.sortType;
  }


}
