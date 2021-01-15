import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {productsData} from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Product[] {
    return productsData.filter(product => product.isAvailable === true);
  }
}
