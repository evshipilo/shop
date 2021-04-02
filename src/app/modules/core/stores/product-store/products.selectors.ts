import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../app.state";
import {ProductState} from "./product.state";
import {ProductModel} from "../../../products/models/product.model";
// import { selectRouterState } from '../router-store/router.selectors';
import {RouterStateUrl} from "../router-store";




export const selectProductState = createFeatureSelector<AppState, ProductState>('products');

export const selectAllProducts = createSelector(
    selectProductState,
    (state: ProductState) => state.products
);

// export const selectIdFromRoute = createSelector(
//     selectRouterState,
//     (state) =>state
// );

