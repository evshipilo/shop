import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ProductsService} from '../../products/services/product/products.service';
import {ProductModel} from '../../products/models/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent {

  constructor(public productsService: ProductsService,
              private router: Router) {
  }

  products: ProductModel[] = this.productsService.getProducts();


  onDelete(id): void{
    this.productsService.delProductById(id);
    this.products = this.productsService.getProducts();
  }

  onChange(p): void{
    const link = ['/admin/edit', p.id];
    this.router.navigate(link).then(e => false);
  }

}
