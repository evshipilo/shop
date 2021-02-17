import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  // constructor(private el: ElementRef) {
  //   el.nativeElement.style.fontSize = '120px'
  // }

  @HostBinding('style.background') background: string;

  @HostListener('mouseenter') onMouseIn(): void {
    this.background = '#8b9c9c';
  }

  @HostListener('mouseleave') onMouseOut(): void {
    this.background = '#6e7f7f';
  }
}
