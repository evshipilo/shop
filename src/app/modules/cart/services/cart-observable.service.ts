import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import {forkJoin, Observable, throwError} from 'rxjs';
import {catchError, retry, publish, refCount, share, map} from 'rxjs/operators';
import {CartAPI} from "../cart.config";
import {ProductModel} from "../../products/models/product.model";


@Injectable({
  providedIn: 'any'
})
export class CartObservableService {
  constructor(
    private http: HttpClient,
    @Inject(CartAPI) private cartUrl: string
  ) {}

  getCartProducts() {
    return this.http.get<ProductModel[]>(this.cartUrl).pipe(
      share(),
      catchError(this.handleError)
    );
  }

  addProduct(product: ProductModel): Observable<ProductModel> {
    const url = this.cartUrl;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .post<ProductModel>(url, body, options)
      .pipe(
        catchError( this.handleError )
      );
  }

  deleteProduct(id): Observable<any> {
    const url = `${this.cartUrl}/${id}`;
    return this.http
        .delete(url)
        .pipe(
          catchError( this.handleError )
        )
  }

  multipleDeleteProduct(idArr): Observable<any[]> {
    const arr=idArr.map(id=>this.deleteProduct(id))
    return forkJoin(arr)
  }

  getProductFromCartById(id: number) {}

  updateUser(user: ProductModel) {}

  createUser(user: ProductModel) {}

  deleteUser(user: ProductModel) {}

  private handleError(err: HttpErrorResponse) {
    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}


