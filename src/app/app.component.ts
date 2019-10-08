import { Component, AfterViewInit, QueryList,
  ViewChildren, ElementRef, ContentChildren, AfterContentInit, ViewChild } from '@angular/core';
import './styles/_styles.scss';
import { ScrollService } from './scroll.service';
import { ScrollAnchorDirective } from './scroll-anchor.directive';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  @ViewChildren(ScrollAnchorDirective)
    private pageAnchors: QueryList<ScrollAnchorDirective>;
 
  constructor(private scrollService: ScrollService) { }

  ngAfterViewInit () {
    const anchorsArray = this.pageAnchors.toArray();
    anchorsArray.forEach(el => this.scrollService.addAnchor(el.elementReference))
  }

}
