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
import {appConfigService} from './modules/core/services/constants/constant.service';
import {generatedString, generatorFactory} from './modules/core/services/generator/generator.factory';
import {GeneratorService} from './modules/core/services/generator/generator.service';
import {LocalStorageService} from './modules/core/services/local-storage/local-storage.service';

// export const appConfig = new InjectionToken<any>('appConfig')

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
    CoreModule
  ],
  providers: [
    // {provide: appConfig, useValue: appConfigService},
    // {provide: generatedString, useFactory: generatorFactory(10), deps: [GeneratorService]},
    // {provide: LocalStorageService, useClass: LocalStorageService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
