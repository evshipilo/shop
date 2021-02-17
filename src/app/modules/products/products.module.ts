import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstComponent} from './components/first/first.component';
import {ProductComponent} from './components/product/product.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {SharedModule} from '../shared/shared.module';
import {ProductViewComponent} from './components/product-view/product-view.component';
import {RoutingModule} from '../routing/routing.module';


@NgModule({
  declarations: [
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    ProductViewComponent],
  imports: [
    // CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    SharedModule,
    RoutingModule
  ],
  exports: [FirstComponent, ProductListComponent]
})
export class ProductsModule {
}
