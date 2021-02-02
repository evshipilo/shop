import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightlightDirective } from './directives/hightlight.directive';
import { BorderedDirective } from './directives/bordered.directive';



@NgModule({
  declarations: [HightlightDirective, BorderedDirective],
  imports: [
    CommonModule
  ],
  exports: [HightlightDirective, BorderedDirective]
})
export class SharedModule { }
