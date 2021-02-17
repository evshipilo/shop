import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartItemListComponent } from './components/cart-item-list/cart-item-list.component';
import {SharedModule} from '../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {CartService} from './services/cart.service';
import {RoutingModule} from '../routing/routing.module';



@NgModule({
  declarations: [CartItemComponent, CartItemListComponent],
  imports: [
    // CommonModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    // FormsModule,
    MatRadioModule,
    RoutingModule,

  ],
  exports: [CartItemListComponent, ]
})
export class CartModule { }
