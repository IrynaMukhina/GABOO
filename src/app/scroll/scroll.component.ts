import { Component } from '@angular/core';
import { ScrollService, IPageAnchor } from '../scroll.service';
import { faChevronUp, IconDefinition, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent {
  
  toHeaderIcon: IconDefinition = faChevronUp;
  toFooterIcon: IconDefinition = faChevronDown;
  pageComponents: IPageAnchor[];
  pageContent: IPageAnchor[];

  constructor(private scrollService: ScrollService) {
    // this.scrollService.scroll$.subscribe(pos => {
    //   this.scroll = pos;
    // });
   }
  scroll:number = 0;

  onItemSelect(anchor: IPageAnchor): void {    
    this.scrollService.moveTo(anchor);
    this.scrollService.makeActive(anchor);
    console.log(this.scroll);
  }

  ngOnInit() {
    setTimeout(_ => {
      this.pageComponents = this.scrollService.getPageAnchors();
    }, 0);
  }
}
