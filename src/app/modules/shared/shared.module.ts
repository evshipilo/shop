import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HightlightDirective} from './directives/hightlight.directive';
import {BorderedDirective} from './directives/bordered.directive';
import {OrderByPipe} from './pipes/order-by.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [HightlightDirective, BorderedDirective, OrderByPipe],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [HightlightDirective, BorderedDirective, OrderByPipe, CommonModule, FormsModule]
})
export class SharedModule {
}
