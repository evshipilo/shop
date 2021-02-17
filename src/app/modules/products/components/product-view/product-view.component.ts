import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/product/products.service';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  product: ProductModel;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private router: Router,
              private cartService: CartService) {
  }

  onClick(): void {
    this.cartService.addProduct(this.product);
    this.router.navigate(['/home']).then(e => false);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.product = this.productService.getProductById(+params.productId);

      }
    );
  }

}
