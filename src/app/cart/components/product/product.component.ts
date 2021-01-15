import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Output() clearEvent = new EventEmitter<boolean>();

  onClick = () => console.log('product bought');
  onClear = () => {
    this.clearEvent.emit(true);
  }
}
