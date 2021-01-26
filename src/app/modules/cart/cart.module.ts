import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartItemListComponent } from './components/cart-item-list/cart-item-list.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [CartItemComponent, CartItemListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
  ],
  exports: [CartItemListComponent]
})
export class CartModule { }
