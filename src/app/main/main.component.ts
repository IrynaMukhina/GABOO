import { Component, OnInit, ElementRef, AfterViewChecked } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { AfterViewInit, QueryList, ViewChildren, ContentChildren, AfterContentInit } from '@angular/core';
import { ScrollAnchorDirective } from '../scroll-anchor.directive';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChildren(ScrollAnchorDirective)
    private pageAnchors: QueryList<ScrollAnchorDirective>;
  
  constructor(private scrollService: ScrollService) { }

  ngOnInit() { }
  
  ngAfterViewInit () {
    console.log(this.pageAnchors.toArray());
    this.pageAnchors.forEach(element => {
      this.scrollService.addAnchor(element.elementReference);
    });
  }
}
