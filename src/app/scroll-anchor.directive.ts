import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollAnchor], app-header, app-footer'
})
export class ScrollAnchorDirective {
  // elementReference: ElementRef;
  
  constructor(elr: ElementRef) {
    return elr;
  }
}
