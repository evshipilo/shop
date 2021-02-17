import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../../../products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product: ProductModel;
  @Input() count: number;
  @Output() addProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() removeProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();


  add(prod): void {
    // this.count++;
    this.addProduct.emit(prod);
  }

  remove(prod): void {
    // this.count--;
    this.removeProduct.emit(prod);
  }
}
