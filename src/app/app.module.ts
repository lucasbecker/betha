import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { CartComponent } from './cart/cart.component';
import { FormatBrlPipe } from './pipes/format-brl.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { Error404Component } from './error/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    CartComponent,
    FooterComponent,
    FormatBrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: '404',
        component: Error404Component
      },
      {
        path: '**',
        redirectTo: '404'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
