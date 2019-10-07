import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() src: string;
  @Input() title: string;
  @Input() price: number;

  constructor() {}

  ngOnInit() {
  }

}
