import {ProductModel} from "../../../products/models/product.model";

export interface ProductState {
    products: ReadonlyArray<ProductModel>;
}

export const initialProductState: ProductState = {
    products: [],
};
