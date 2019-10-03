import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './shared/button/button.component';
import { MainLogoComponent } from './shared/main-logo/main-logo.component';
import { ProductItemComponent } from './shared/product-item/product-item.component';
import { NetworkIconsComponent } from './shared/network-icons/network-icons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PromoComponent } from './header/promo/promo.component';
import { CategoryMenuComponent } from './header/category-menu/category-menu.component';
import { LineBarComponent } from './header/line-bar/line-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    MainLogoComponent,
    ProductItemComponent,
    NetworkIconsComponent,
    PromoComponent,
    CategoryMenuComponent,
    LineBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
