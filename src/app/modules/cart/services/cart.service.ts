import {Injectable} from '@angular/core';
import {ProductModel} from '../../products/models/product.model';
import {Subject} from 'rxjs';
import {CartObservableService} from "./cart-observable.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: ProductModel[] = [];
  // cartProducts$:Subject<ProductModel[]>=new Subject();
  uniqueProducts: ProductModel[] = [];
  totalQuantity = 0;
  totalSum = 0;

  constructor(private cartObservableService: CartObservableService) {
  }

  getId(): string {
    const stringArr = [];
    for (let i = 0; i < 2; i++) {
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }

  addProduct(prod: ProductModel): void {
    const product = {...prod, id: `${prod.id}:${ this.getId()}`}
    this.cartObservableService.addProduct(product).subscribe(p => {
      this.updateCartData();
    })
    // this.cartProducts = [...this.cartProducts, prod];
    // this.updateCartData();
    // console.log(this.cartProducts);
  }

  removeProduct(prod: ProductModel): void {
    // const copy = [...this.cartProducts];
    // copy.reverse();
    // const ind = copy.findIndex(pr => pr.id === prod.id);
    // if (ind >= 0) {
    //   this.cartProducts.splice(this.cartProducts.length - 1 - ind, 1);
    // }
    // this.cartProducts = [...this.cartProducts];
    this.cartObservableService.deleteProduct(prod.id).subscribe(p=>{
      this.updateCartData();
    })

  }

  setUniqueList(): void {
    const res: ProductModel[] = [];
    const idArr: string[] = [...(new Set(this.cartProducts.map(i => i.id.split(':')[0])))];
    idArr.forEach((id) => {
      const ind = this.cartProducts.findIndex(prod => prod.id.split(':')[0] === id);
      res.push({...this.cartProducts[ind], ...{count: this.getItemsCount(this.cartProducts[ind])}});
    });
    this.uniqueProducts = res;
  }

  getItemsCount(prod: ProductModel): number {
    return this.cartProducts.filter(p => p.id.split(':')[0] === prod.id.split(':')[0]).length;
  }

  private setTotalQuantity(): void {
    this.totalQuantity = this.cartProducts.length;
  }

  private setTotalSum(): void {
    this.totalSum = this.cartProducts.reduce((acc, prod) => acc + prod.price, 0);
  }

  updateCartData(): void {
    this.cartObservableService.getCartProducts().subscribe(prod => {
      this.cartProducts = prod
      this.setTotalSum();
      this.setTotalQuantity();
      this.setUniqueList();
    })
  }

  removeOneTypeProducts(prod: ProductModel): void {
    // this.cartProducts = this.cartProducts.filter(p => p.id !== prod.id);
    const ids = this.cartProducts.filter(p => p.id.split(':')[0] === prod.id.split(':')[0])
      .map(a=>a.id);
    this.cartObservableService.multipleDeleteProduct(ids).subscribe(a=>{
      this.updateCartData();
    })

  }

  removeAllProducts(): void {
    const ids = this.cartProducts
      .map(a=>a.id);
    this.cartObservableService.multipleDeleteProduct(ids).subscribe(a=>{
      this.updateCartData();
    })

  }

  isEmptyCart(): boolean {
    return !this.cartProducts.length;
  }

}
