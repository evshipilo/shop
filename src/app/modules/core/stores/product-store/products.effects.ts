import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from "rxjs";
import {switchMap} from 'rxjs/operators'
import {Action} from "@ngrx/store";
import * as ProductsActions from './products.actions';
import {ProductPromiseService} from "../../../products/services/product/product-promise.service";


@Injectable()
export class ProductsEffects {

    constructor(private actions$: Actions,
                private productPromiseService: ProductPromiseService
    ) {
    }

    loadProducts$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.loadProducts),
            switchMap(action =>
                this.productPromiseService
                    .getProducts()
                    .then(products => ProductsActions.loadProductsSuccess({products}))
                    .catch(error => ProductsActions.loadProductsFailure({error}))
            )
        )
    );

}
