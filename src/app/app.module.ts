import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CartModule} from './modules/cart/cart.module';
import {OrdersModule} from './modules/orders/orders.module';
import {ProductsModule} from './modules/products/products.module';
import {SharedModule} from './modules/shared/shared.module';
import {CoreModule} from './modules/core/core.module';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CartModule,
    OrdersModule,
    ProductsModule,
    SharedModule,
    CoreModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
