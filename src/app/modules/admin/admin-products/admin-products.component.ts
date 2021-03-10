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

  async ngOnInit() {
    this.products = await this.productsService.getProducts();
  }

  products: ProductModel[] ;


  async onDelete(id): Promise<void>{
    await this.productsService.delProductById(id);
    this.products = await this.productsService.getProducts();
  }

  onChange(p): void{
    const link = ['/admin/edit', p.id];
    this.router.navigate(link).then(e => false);
  }

}
