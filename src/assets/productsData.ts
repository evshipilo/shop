import {category} from '../enum/category';
import {ProductModel} from '../app/modules/products/models/product.model';

export const productsData: ProductModel[] = [
  {name: 'KD11', price: 149, isAvailable: true, categories: category.snickers, id: 0},
  {name: 'Spalding 500', price: 99, isAvailable: false, categories: category.balls, id: 1},
  {name: 'Nike L', price: 14, isAvailable: true, categories: category.socks, id: 2},
  {name: 'KD12', price: 179, isAvailable: true, categories: category.snickers, id: 3},
  {name: 'Spalding 1000', price: 199, isAvailable: false, categories: category.balls, id: 4},
  {name: 'Nike S', price: 14, isAvailable: true, categories: category.socks, id: 5}
];
