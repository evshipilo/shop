import {category} from '../enum/category';
import {ProductModel} from '../app/modules/products/models/product.model';

export const productsData: ProductModel[] = [
  {name: 'KD11', price: 149, isAvailable: true, categories: category.snickers, id: 0, description: 'Demand more from your game with the KD 11, featuring a one-piece Flyknit upper and the first-ever combination of Nike React foam and Zoom Air cushioning.'},
  {name: 'Spalding 500', price: 99, isAvailable: false, categories: category.balls, id: 1, description: 'Built for after-school practice and weekends at the rec center. The Spalding TF-500 indoor basketball has a deep channel design that helps young ballers ...'},
  {name: 'Nike L', price: 14, isAvailable: true, categories: category.socks, id: 2, description: 'Attack the rack and dismantle your opponents with supreme strength and confidence in men\'s LeBron shoes'},
  {name: 'KD12', price: 179, isAvailable: true, categories: category.snickers, id: 3, description: ' The Nike KD12 addressed the strobel, the thin layer inside the shoe that separates your foot from the midsole cushioning'},
  {name: 'Spalding 1000', price: 199, isAvailable: false, categories: category.balls, id: 4, description: 'The TF-1000 Legacy indoor game basketball has a game-ready feel straight out of the box. Used by some of the best high school and college ...'},
  {name: 'Nike S', price: 14, isAvailable: true, categories: category.socks, id: 5, description: 'Get laced up for training, sport and lifestyle with the latest designs of men\'s shoes and sneakers from Nike'}
];
