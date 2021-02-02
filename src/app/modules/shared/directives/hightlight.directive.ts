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
    this.background = '#c0d3d3';
  }

  @HostListener('mouseleave') onMouseOut(): void {
    this.background = 'white';
  }
}
