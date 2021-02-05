import {Injectable} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {productsData} from '../../../../../assets/productsData';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Observable<any> {
    const data = productsData.sort((a, b) => {
      if (a.categories > b.categories) {
        return 1;
      }
      if (a.categories < b.categories) {
        return -1;
      }
      return 0;
    });
    return new Observable(subscriber => {
      subscriber.next(data);
    });
  }
}
