import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import './styles/_styles.scss';
import { ScrollService } from './scroll.service';
import { ScrollAnchorDirective } from './scroll-anchor.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChildren(ScrollAnchorDirective) pageAnchors: QueryList<ElementRef>;
 
  constructor(private scrollService: ScrollService) {

  }

  ngAfterViewInit() {
    this.pageAnchors.forEach(element => {
      this.scrollService.addAnchor(element);
    });
  }

}
