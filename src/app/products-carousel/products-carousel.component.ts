import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService} from '../http.service';


@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss']
})
export class ProductsCarouselComponent implements OnInit {
  @ViewChild('products', {static: false}) products: ElementRef;
  productContainer: HTMLElement;
  productList: Array<HTMLElement>;
  itemWidth: number = 270;
  visibleNum: number = 4;
  position: number = 0;
  productData;
  firstItem: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe((data:any) => this.productData = JSON.parse(JSON.stringify(data)));
    
    //this.itemWidth = this.productList[0].offsetWidth;
  }

  ngAfterViewInit() {
    this.productContainer = this.products.nativeElement;
  }

  ngAfterViewChecked() {
    this.productList = [...this.products.nativeElement.childNodes];
  }

  moveToNext(){
    this.position -= this.itemWidth * this.visibleNum;
    this.position = Math.max(this.position, -this.itemWidth * (this.productList.length - 1 - this.visibleNum));
    this.productContainer.style.marginLeft = this.position + 'px';
    
    console.log(this.productList.length);

  }

  moveToPrev(){
    const newPosition = this.position + this.itemWidth * this.visibleNum;
    const posiblePosition = 0;

    this.position = newPosition >= posiblePosition ? posiblePosition : newPosition;
    this.productContainer.style.marginLeft = this.position + 'px';
  }
}
