import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollService, IPageAnchor } from '../scroll.service';
import { faChevronUp, IconDefinition, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit, AfterViewInit  {
  
  toHeaderIcon: IconDefinition = faChevronUp;
  toFooterIcon: IconDefinition = faChevronDown;
  pageComponents: IPageAnchor [];

  constructor(private scrollService: ScrollService) { 
    
    // console.log(this.pageComponents);
    
  }

  onItemSelect(comp: IPageAnchor): void {
    document.querySelector(comp.selector).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  ngOnInit() {
    //this.pageComponents.forEach(el => console.log(el.offsetTop));
  }

  ngAfterViewInit(): void {
    this.pageComponents = this.scrollService.getAnchors();
  }
  

}
