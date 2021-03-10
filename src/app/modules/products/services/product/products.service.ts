import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
// import {productsData} from '../../../../../assets/productsData';
import {Observable, Subject} from 'rxjs';
import {category} from '../../../../../enum/category';
import {ProductPromiseService} from "./product-promise.service";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductsService {

  constructor(private productPromiseService: ProductPromiseService) {
  }

  // products: ProductModel[] = [];

  getId(): string {
    const stringArr = [];
    for (let i = 0; i < 2; i++) {
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }

  async getProducts(): Promise<ProductModel[]> {
    const products = await this.productPromiseService.getProducts()
    const data = products.sort((a, b) => {
      if (a.categories > b.categories) {
        return 1;
      }
      if (a.categories < b.categories) {
        return -1;
      }
      return 0;
    });

    return data;
  }

  // getLastId(products: ProductModel[]): number {
  //   const prod = [...products];
  //   const idArr = prod.map(p => p.id);
  //   idArr.sort((a, b) => {
  //     if (a > b) {
  //       return -1;
  //     }
  //     if (a === b) {
  //       return 0;
  //     }
  //     if (a < b) {
  //       return 1;
  //     }
  //   });
  //   return idArr[0];
  // }

  async addProduct(name: string, price: number, description: string, isAvailable: boolean, categories: category): Promise<void> {
    // const products = await this.productPromiseService.getProducts()
    const prod = {
      name,
      price,
      isAvailable,
      categories,
      id: this.getId(),
      description,
    };
    await this.productPromiseService.createProduct(prod)
  }


  async getProductById(id: string): Promise<ProductModel> {
    const prod = await this.productPromiseService.getProductById(id)
    return prod
  }

  async delProductById(id: string): Promise<void> {
    // const copy = [...this.products];
    // const ind = this.products.findIndex(prod => prod.id === id);
    // copy.splice(ind, 1);
    // this.products = [...copy];
    // console.log(this.products)
    await this.productPromiseService.deleteProduct(id)
  }

  async changeProduct(p): Promise<void> {
    //   const copy = [...this.products];
    //   const ind = this.products.findIndex(prod => prod.id === p.id);
    //   copy.splice(ind, 1, p);
    //   this.products = [...copy];
    await this.productPromiseService.updateProduct(p)
  }

}
