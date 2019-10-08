import { Component, OnInit, ElementRef } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { ScrollAnchorDirective } from '../scroll-anchor.directive';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChildren(ScrollAnchorDirective) pageAnchors: QueryList<ElementRef>;

  constructor(private scrollService: ScrollService) {
  }

  ngOnInit() { 
  }

  ngAfterViewInit() {
    this.pageAnchors.forEach(element => {
      this.scrollService.addAnchor(element);  
    });
  }
}
