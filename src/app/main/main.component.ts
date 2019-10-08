import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ScrollAnchorDirective } from '../scroll-anchor.directive';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChildren(ScrollAnchorDirective) pageAnchors: QueryList<ScrollAnchorDirective>;

  constructor(private scrollService: ScrollService) {
  
  }

  ngOnInit() { 

  }

  ngAfterViewInit() {
    this.pageAnchors.forEach(element => {
      this.scrollService.pushAnchor(element);  
    });
}

}
