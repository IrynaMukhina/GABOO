import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import { QueryList, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild('mainPageContent', {static: false}) mainPageContent: ElementRef;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
   console.log([...this.mainPageContent.nativeElement.childNodes]);

  }

}
