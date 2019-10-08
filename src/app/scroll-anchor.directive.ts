import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollAnchor]'
})
export class ScrollAnchorDirective {
  elementReference: ElementRef;
  
  constructor(elr: ElementRef) {
    this.elementReference = elr;
  }
}
