import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProcessOrderComponent} from './components/process-order/process-order.component';
import {OrdersRoutingModule} from './orders-routing.module';



@NgModule({
  declarations: [ProcessOrderComponent],
  imports: [
    OrdersRoutingModule
    // CommonModule
  ]
})
export class OrdersModule { }
