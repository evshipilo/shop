import { Action, createReducer, on } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import {initialProductState, ProductState} from "./product.state";



const reducer = createReducer(
    initialProductState,
    on(ProductsActions.loadProductsSuccess, (state, {products}) => {
        console.log('GET_Products action being handled!');
        return { ...state, products};
    }),
    on(ProductsActions.loadProductsFailure, (state, {error}) => {
        console.log('Load products error:',error);
        return { ...state };
    }),

);

export function productsReducer(state: ProductState | undefined, action: Action) {
    return reducer(state, action);
}

