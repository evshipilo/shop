import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app.component';
import {CartModule} from './modules/cart/cart.module';
import {OrdersModule} from './modules/orders/orders.module';
import {ProductsModule} from './modules/products/products.module';
import {SharedModule} from './modules/shared/shared.module';
import {CoreModule} from './modules/core/core.module';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {RoutingModule} from './modules/routing/routing.module';
import {Router} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AdminModule} from './modules/admin/admin.module';
import {ProductsService} from './modules/products/services/product/products.service';
import {httpInterceptorProviders} from "./modules/core/interseptors";
import { StoreModule } from '@ngrx/store';
import { RootStoreModule } from './modules/core/stores/root-store.module';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CartModule,
    // OrdersModule,
    ProductsModule,
    SharedModule,
    CoreModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    AdminModule,
    HttpClientModule,
    RoutingModule,
    MatFormFieldModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    RootStoreModule

  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }


}
