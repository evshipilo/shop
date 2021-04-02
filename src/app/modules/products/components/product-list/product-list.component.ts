import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/product/products.service';
import {CommunicateService} from '../../services/communicate/communicate.service';
import {Observable} from 'rxjs';
import {CartService} from '../../../cart/services/cart.service';
import {CartObservableService} from "../../../cart/services/cart-observable.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../core/stores";
import {ProductsStateFacadeService} from "../../../core/stores/product-store/products.facade";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    providers: []
})
export class ProductListComponent {

    products: Observable<readonly ProductModel[]>=this.productsStateFacadeService.allProducts$

    ngOnInit() {
        this.productsStateFacadeService.getInitialAppData();
    }

    constructor(public productsService: ProductsService,
                private cartObservableService: CartObservableService,
                private cartService: CartService,
                private productsStateFacadeService: ProductsStateFacadeService
    ) {
    }

    trackByFn(index, item): number {
        return index;
    }

    onClick(prod): void {
        this.cartService.addProduct(prod);
    }

}
