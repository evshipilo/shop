import {Pipe, PipeTransform} from '@angular/core';
import {ProductModel} from '../../products/models/product.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<ProductModel>, ...args: [string?, boolean?]): Array<ProductModel> {
    const [sortKey, order] = args;
    if (!sortKey) { return value; }
    // const order = args[1];
    if (order) { return value.sort((a, b) => {
      if (a[sortKey] >= b[sortKey]) { return 1; }
      if (a[sortKey] < b[sortKey]) { return -1; }
    });
    }
    return value.sort((a, b) => {
      if (a[sortKey] <= b[sortKey]) { return 1; }
      if (a[sortKey] > b[sortKey]) { return -1; }
    });
  }

}
