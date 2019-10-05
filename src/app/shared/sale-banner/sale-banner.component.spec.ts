import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleBannerComponent } from './sale-banner.component';

describe('SaleBannerComponent', () => {
  let component: SaleBannerComponent;
  let fixture: ComponentFixture<SaleBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
