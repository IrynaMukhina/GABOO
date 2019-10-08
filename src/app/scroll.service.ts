import { Injectable, ElementRef, Inject, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IPageAnchor {
  title: string,
  selector: string
}

interface IAnchorOffset {
  offset: number,
  selector: string
}

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  // @Output() activeAnchor: EventEmitter<any> = new EventEmitter();
  private pageAnchorRefs: ElementRef[] = [];
  public activeAnchor: ElementRef;
  private scrollOptions = { 
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  };
  private pageAnchorOffsets: IAnchorOffset[] = [];
  private getElementVerticalPosition(elem) {
   const clientHeight =  document.documentElement.clientHeight;

  }

  constructor(@Inject(DOCUMENT) private document: any) {
    fromEvent(window, 'scroll').pipe(
      map(_ => window.pageYOffset))
        .subscribe(position => {
          this.onScrollCallback(position);
        });
    console.log('sd height', window.innerHeight)
  }

  private selectRef(anchor: IPageAnchor) {
    return this.pageAnchorRefs.find(el =>
      el.nativeElement.localName === anchor.selector
    );
  }

  private onScrollCallback(position: number) {
    console.log(this.pageAnchorOffsets);
    
    const anchorsCount = this.pageAnchorOffsets.length;
    let heightCounter = 0;
    for (let i = 0; i < anchorsCount - 1; i++) {
      console.log(position);
      if(position >= this.pageAnchorOffsets[i].offset
        
        && position < this.pageAnchorOffsets[i + 1].offset
     
        ) {
          this.activeAnchor = this.selectRef({
            title: '',
            selector: this.pageAnchorOffsets[i].selector
          });
          console.log(this.activeAnchor);
          
          return;
        }
       
    }
    this.activeAnchor = this.selectRef({
      title: '',
      selector: this.pageAnchorOffsets[anchorsCount - 1].selector
    });
  }

  addAnchor(elRef: ElementRef) {
    this.pageAnchorRefs.push(elRef);
    console.log(elRef.nativeElement.localName, elRef.nativeElement.getBoundingClientRect().top);
    console.log('height', elRef.nativeElement.getBoundingClientRect().height);
    console.log('scrollTop', this.document.documentElement.scrollTop)

    this.pageAnchorOffsets.push({
      offset: elRef.nativeElement.getBoundingClientRect().top
      + elRef.nativeElement.getBoundingClientRect().height,
      // offset: this.getElementVerticalPosition(elRef.nativeElement),
      selector: elRef.nativeElement.localName
    });

    this.pageAnchorOffsets.sort((a, b) => a.offset - b.offset);
  }

  resetAnchors() {
    this.pageAnchorRefs = [];
    this.pageAnchorOffsets = [];
  }

  getPageAnchors() {
    return this.pageAnchorRefs.map(elRef => ({ 
      selector: elRef.nativeElement.localName,
      title: elRef.nativeElement.title
    }));
  }

  moveTo(anchor: IPageAnchor) {
    this.selectRef(anchor).nativeElement.scrollIntoView(this.scrollOptions);
  }

  makeActive(anchor: IPageAnchor) {
    this.activeAnchor = this.selectRef(anchor);
  }

  getActive() {
    return { 
      selector: this.activeAnchor.nativeElement.localName,
      title: this.activeAnchor.nativeElement.title
    }
  }
}
