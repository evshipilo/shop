import {Injectable} from '@angular/core';
import {ProductModel} from '../../products/models/product.model';
import {count} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: ProductModel[] = [];
  uniqueProducts: ProductModel[] = [];
  totalQuantity = 0;
  totalSum = 0;

  constructor() {
  }


  addProduct(prod: ProductModel): void {
    this.cartProducts = [...this.cartProducts, prod];
    this.updateCartData();
    console.log(this.cartProducts);
  }

  removeProduct(prod: ProductModel): void {
    const copy = [...this.cartProducts];
    copy.reverse();
    const ind = copy.findIndex(pr => pr.id === prod.id);
    if (ind >= 0) {
      this.cartProducts.splice(this.cartProducts.length - 1 - ind, 1);
    }
    this.cartProducts = [...this.cartProducts];
    this.updateCartData();
    console.log(this.cartProducts);
  }

  setUniqueList(): void {
    const res: ProductModel[] = [];
    const idArr: number[] = [...(new Set(this.cartProducts.map(i => i.id)))];
    idArr.forEach((id) => {
      const ind = this.cartProducts.findIndex(prod => prod.id === id);
      res.push({...this.cartProducts[ind], ...{count: this.getItemsCount(this.cartProducts[ind])}});
    });
    this.uniqueProducts = res;
  }

  getItemsCount(prod: ProductModel): number {
    return this.cartProducts.filter(p => p.id === prod.id).length;
  }

  private setTotalQuantity(): void {
    this.totalQuantity = this.cartProducts.length;
  }

  private setTotalSum(): void {
    this.totalSum = this.cartProducts.reduce((acc, prod) => acc + prod.price, 0);
  }

  updateCartData(): void {
    this.setTotalSum();
    this.setTotalQuantity();
    this.setUniqueList();
  }

  removeOneTypeProducts(prod: ProductModel): void {
    this.cartProducts = this.cartProducts.filter(p => p.id !== prod.id);
    this.updateCartData();
  }

  removeAllProducts(): void {
    this.cartProducts = [];
    this.updateCartData();
  }

  isEmptyCart(): boolean {
    return !this.cartProducts.length;
  }

}
