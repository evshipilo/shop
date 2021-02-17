import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CartService} from '../../cart/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class IsCartEmptyGuard implements CanLoad {

  constructor(private cartService: CartService) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanActivate Guard is called');
    if (this.cartService.totalQuantity) { return true; }
    else {
      return false;
    }

  }
}
