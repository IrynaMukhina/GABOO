import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

const PAGE_CONTENT = [
  { selector: 'app-product-list',
    name: 'Product list',
    id: 1,
    offSet: 0 },
  { selector: 'app-sale-banner',
    name: 'Sale',
    id: 2,
    offSet: 0 },
  { selector: 'app-parallax',
    name: 'Parallax',
    id: 3,
    offSet: 0 },
  { selector: 'app-product-carousel',
    name: 'Carousel',
    id: 4,
    offSet: 0 },
  { selector: 'app-story',
    name: 'Story',
    id: 5,
    offSet: 0 },
];

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {
  private pageComponents: {
    selector: string;
    name: string;
    id: number;
    offSet: number; 
  }[];

  constructor() { 
    this.pageComponents = PAGE_CONTENT;
  }

  onItemSelect(comp): void {
    document.querySelector(comp.selector).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  ngOnInit() {
  }
}
