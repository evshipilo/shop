import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProcessOrderComponent} from './components/process-order/process-order.component';
import {OrdersRoutingModule} from './orders-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [ProcessOrderComponent],
  imports: [
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // CommonModule
  ]
})
export class OrdersModule { }
