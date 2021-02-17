import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../products/services/product/products.service';
import {ProductModel} from '../../products/models/product.model';
import {category} from '../../../../enum/category';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.scss']
})
export class AdminEditProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
  }

  product: ProductModel;

  cat = category;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.product = this.productService.getProductById(+params.productId);

      }
    );
  }

  onClick(): void {
    this.productService.changeProduct(this.product);
  }


}
