import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/product/products.service';
import {CartService} from '../../../cart/services/cart.service';
import {ProductsStateFacadeService} from "../../../core/stores/product-store/products.facade";
import {log} from "util";
import {RouterStateFacadeService} from "../../../core/stores";

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
                private cartService: CartService,
                private routerStateFacadeService: RouterStateFacadeService
    ) {
    }

    onClick(): void {
        this.cartService.addProduct(this.product);
        this.router.navigate(['/home']).then(e => false);
    }

    async ngOnInit(): Promise<void> {
        // this.route.params.subscribe(async params => {
        //     this.product = await this.productService.getProductById(params.productId);
        //   }
        // );
        this.routerStateFacadeService.idFromRout$.subscribe(data => {

        })
        const id = this.route.snapshot.params['productId'];
        this.product = await this.productService.getProductById(id);
    }

}
