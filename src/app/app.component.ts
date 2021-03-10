import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CartService} from './modules/cart/services/cart.service';
import {UserService} from './modules/core/services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(public cartService: CartService, public userService: UserService) {
  }

  @ViewChild('appTitle') appTitle: ElementRef;
  name = 'Basketball Shop';

  password: string;

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = this.name;
    this.cartService.updateCartData()
  }

  onClick(): void{
    if (this.password === 'admin') { this.userService.setAdminRole(); }
    else { this.userService.setUserRole(); }
  }

}
