import { Injectable } from '@angular/core';
import { ScrollAnchorDirective } from './scroll-anchor.directive';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private pageAnchors: PageAnchor[];
  private activeAnchor: number;
  constructor() {
    this.pageAnchors = [];
  }

  pushAnchor(anchor: ScrollAnchorDirective) {
    const offsetTop = anchor.elementReference.nativeElement.offsetTop;
    const title = anchor.elementReference.nativeElement.title;
    const selector = anchor.elementReference.nativeElement.localName;
    this.pageAnchors.push({
      offsetTop: offsetTop,
      title: title,
      selector: selector
    });
  }
  resetAnchors() {
    this.pageAnchors = [];
  }

  getAnchors() {
    return this.pageAnchors;
  } 

  makeActive(anchor: ScrollAnchorDirective) {

  }
}

interface PageAnchor {
  title: string,
  offsetTop: number,
  selector: string,
}