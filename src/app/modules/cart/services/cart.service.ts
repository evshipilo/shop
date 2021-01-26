import {Injectable} from '@angular/core';
import {ProductModel} from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
  }

  addProduct(prodList: ProductModel[], prod: ProductModel): ProductModel[] {
    return [...prodList, prod];
  }

  removeProduct(prodList: ProductModel[], prod: ProductModel): ProductModel[] {
    const ind = prodList.findIndex(pr => pr.id === prod.id);
    if (ind >= 0) { prodList.splice(ind, 1); }
    return [...prodList];
  }

  getUniqueList(prodList: ProductModel[]): ProductModel[] {
    const res: ProductModel[] = [];
    const idArr: number[] = [...(new Set(prodList.map(i => i.id)))];
    idArr.forEach((id, i) => {
      const ind = prodList.findIndex(prod => prod.id === id);
      res.push(prodList[ind]);
    });
    return res;
  }

  getItemsCount(prodList: ProductModel[], prod: ProductModel): number {
    return prodList.filter(p => p.id === prod.id).length;
  }

  getTotalItemsCount(prodList: ProductModel[]): number {
    return prodList.length;
  }

  getTotalPrice(prodList: ProductModel[]): number {
    return prodList.reduce((acc, prod) => acc + prod.price, 0);
  }

}
