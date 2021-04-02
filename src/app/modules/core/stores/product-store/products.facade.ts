import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import * as ProductsActions from './products.actions';
import {Observable} from "rxjs";
import {ProductModel} from "../../../products/models/product.model";
import * as ProductsSelectors from './products.selectors';
import { select } from '@ngrx/store';
import {Params} from "@angular/router";

@Injectable({
    providedIn: 'root',
})
export class ProductsStateFacadeService {


    constructor(
        private store: Store<AppState>,
    ) { }

    get allProducts$(): Observable<readonly ProductModel[]> {
        return this.store.pipe(select(ProductsSelectors.selectAllProducts));
    }

    getInitialAppData(): void {
        this.store.dispatch(ProductsActions.loadProducts());
    }


}
