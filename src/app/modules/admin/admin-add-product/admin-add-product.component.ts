import {Component, OnInit} from '@angular/core';
import {category} from '../../../../enum/category';
import {ProductsService} from '../../products/services/product/products.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.scss']
})
export class AdminAddProductComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  name = '';
  price = 0;
  description = '';
  available = true;
  categories: category = category.balls;

  cat = category;

  ngOnInit(): void {
  }

  onClick(): void{
    this.productService.addProduct(this.name, this.price, this.description, this.available, this.categories);
    this.name = '';
    this.price = 0;
    this.description = '';
    this.available = true;
    this.categories = category.balls;
  }

}
