import { NgModule } from '@angular/core';

import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {SharedModule} from '../shared/shared.module';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import {RoutingModule} from '../routing/routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
// import {AdminRoutingModule} from "./admin-routing.module";



@NgModule({
  declarations: [AdminMenuComponent, AdminProductsComponent, AdminEditProductComponent, AdminAddProductComponent],
  imports: [
    MatButtonModule,
    MatCardModule,
    SharedModule,
    RoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // AdminRoutingModule
  ]
})
export class AdminModule { }
