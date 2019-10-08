import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit, AfterViewInit  {
  
  toTopIcon = faChevronUp;


  constructor(private scrollService: ScrollService) { 
  }

  onItemSelect(comp): void {
    document.querySelector(comp.selector).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  ngOnInit() {
    // this.pageComponents.forEach(el => console.log(el.offsetTop));
  }

  ngAfterViewInit(): void {
    
  }
  

}
