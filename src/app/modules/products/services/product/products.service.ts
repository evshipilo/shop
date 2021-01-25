import {Injectable} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {productsData} from '../../../../../assets/productsData';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): ProductModel[] {
    return  productsData.sort((a, b) => {
      if (a.categories > b.categories) { return 1; }
      if (a.categories < b.categories) { return -1; }
      return 0;
    });
  }
}
