import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from '../products/components/product-list/product-list.component';
import {CartItemListComponent} from '../cart/components/cart-item-list/cart-item-list.component';
import {PathNotFoundComponent} from '../shared/components/path-not-found/path-not-found.component';
import {ProductViewComponent} from '../products/components/product-view/product-view.component';
import {ProcessOrderComponent} from '../orders/components/process-order/process-order.component';
import {IsCartEmptyGuard} from '../core/guards/is-cart-empty.guard';
import {IsAdminGuard} from '../core/guards/is-admin.guard';
import {AdminMenuComponent} from '../admin/admin-menu/admin-menu.component';
import {AdminProductsComponent} from '../admin/admin-products/admin-products.component';
import {AdminAddProductComponent} from '../admin/admin-add-product/admin-add-product.component';
import {AdminEditProductComponent} from '../admin/admin-edit-product/admin-edit-product.component';


const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent
  },
  {
    path: 'chart',
    component: CartItemListComponent,
    children: [
      {
        path: 'order',
        loadChildren: () => import('src/app/modules/orders/orders.module').then(m => m.OrdersModule),
        canLoad: [IsCartEmptyGuard],
      }
    ]

  },
  {
    path: 'admin',
    component: AdminMenuComponent,
    canActivate: [IsAdminGuard],
    children: [
      {
        path: 'products',
        component: AdminProductsComponent
      },
      {
        path: 'add',
        component: AdminAddProductComponent
      },
      {
        path: 'edit/:productId',
        component: AdminEditProductComponent
      }
    ]

  },

  {
    path: 'view/:productId',
    component: ProductViewComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
