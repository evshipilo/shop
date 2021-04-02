import {Component, EventEmitter, Input, Output, } from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {Router} from '@angular/router';
import {CommunicateService} from '../../services/communicate/communicate.service';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private router: Router, ) {
  }

  @Input() product: ProductModel;
  @Output() addProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  onClick(product): void {
    this.addProduct.emit(product);
  }

  onView(): void {
    const link = ['/view', this.product.id];
    this.router.navigate(link);
  }
}
