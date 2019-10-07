import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpService} from '../http.service';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit, AfterViewInit, AfterViewChecked {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  @ViewChild('products', {static: false}) products: ElementRef;
  productContainer: HTMLElement;
  productList: Array<HTMLElement>;
  itemWidth: number = 260;
  visibleNum: number = 4;
  position: number = 0;
  productData;
  firstItem: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.getData().subscribe((data:any) => this.productData = JSON.parse(JSON.stringify(data)));
    this.httpService.getData().subscribe((data: any) => this.productData = data);
    // this.itemWidth = this.productList[0].offsetWidth;
  }

  ngAfterViewInit() {
    this.productContainer = this.products.nativeElement;
  }

  ngAfterViewChecked() {
    this.productList = [...this.products.nativeElement.childNodes];
  }

  moveToNext() {
    this.position -= this.itemWidth * this.visibleNum;
    this.position = Math.max(this.position, -this.itemWidth * (this.productList.length - 1 - this.visibleNum));
    this.productContainer.style.marginLeft = this.position + 'px';

    console.log(this.productList.length);
  }

  moveToPrev() {
    const newPosition = this.position + this.itemWidth * this.visibleNum;
    const posiblePosition = 0;

    this.position = newPosition >= posiblePosition ? posiblePosition : newPosition;
    this.productContainer.style.marginLeft = this.position + 'px';
  }
}
