import { Injectable, ElementRef } from '@angular/core';

export interface IPageAnchor {
  title: string,
  offsetTop: number,
  selector: string,
}

interface IReferenceAnchor {
  ref: ElementRef,
  anchor: IPageAnchor
}

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private pageAnchors: IReferenceAnchor[];
  private headerAnchor: IReferenceAnchor;
  private footerAnchor: IReferenceAnchor;
  
  constructor() {
    this.pageAnchors = [];
  }

  addAnchor(elRef: ElementRef) {
    const offsetTop = elRef.nativeElement.offsetTop;
    const title = elRef.nativeElement.title;
    const selector = elRef.nativeElement.localName;

    switch(selector) {
      case 'app-header': {

        const anchor: IPageAnchor = {
          offsetTop: offsetTop,
          title: 'Header',
          selector: selector
        };
        this.headerAnchor = {
          ref: elRef,
          anchor: anchor,
        }
        break;
      }
      case 'app-footer': {
        const anchor: IPageAnchor = {
          offsetTop: offsetTop,
          title: 'Footer',
          selector: selector
        };
        this.headerAnchor = {
          ref: elRef,
          anchor: anchor,
        }
        break;
      }
      default: {
        const anchor: IPageAnchor = {
          offsetTop: offsetTop,
          title: title,
          selector: selector
        };
        this.pageAnchors.push({
          ref: elRef,
          anchor: anchor
      });
    }
    }
  }
  resetAnchors() {
    this.pageAnchors = [];
  }

  getAnchors() {
    console.log(this.pageAnchors);
    const anchors = [];
    console.log(this.pageAnchors[0]);
    
     this.pageAnchors.forEach((element, i) => {
       console.log(i);
       
       anchors.push(element.anchor);
     });
    console.log(anchors);
    
    return anchors;
  }

  moveTo(anchor: IPageAnchor) {

  }

  makeActive(anchor: IPageAnchor) {

  }
}
