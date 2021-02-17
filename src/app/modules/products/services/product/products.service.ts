import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {productsData} from '../../../../../assets/productsData';
import {Observable, Subject} from 'rxjs';
import {category} from '../../../../../enum/category';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductsService{

  constructor() {
    // console.log('constructor initialized');
  }

  products: ProductModel[] = productsData;

  //  products = new Subject<ProductModel[]>()

  // ngOnDestroy() {
  //   console.log('localService is destroyed');
  // }

  getProducts(): ProductModel[] {
    const data = this.products.sort((a, b) => {
      if (a.categories > b.categories) {
        return 1;
      }
      if (a.categories < b.categories) {
        return -1;
      }
      return 0;
    });
    // return new Observable(subscriber => {
    //   subscriber.next(data);
    // });
    return data;
  }

  getLastId(): number {
    const prod = [...this.products];
    const idArr = prod.map(p => p.id);
    idArr.sort((a, b) => {
      if (a > b) { return -1; }
      if (a === b) { return 0; }
      if (a < b) { return 1; }
    });
    return idArr[0];
  }

  addProduct(name: string, price: number, description: string, isAvailable: boolean, categories: category): void {
    this.products = [...this.products, {
      name,
      price,
      isAvailable,
      categories,
      id: +this.getLastId() + 1,
      description,
    }];
  }


  getProductById(id: number): ProductModel {
    return this.products.find(prod => prod.id === id);
  }

  delProductById(id: number): void {
    const copy = [...this.products];
    const ind = this.products.findIndex(prod => prod.id === id);
    copy.splice(ind, 1);
    this.products = [...copy];
    // console.log(this.products)
  }

  changeProduct(p): void{
    const copy = [...this.products];
    const ind = this.products.findIndex(prod => prod.id === p.id);
    copy.splice(ind, 1, p);
    this.products = [...copy];
  }

}
