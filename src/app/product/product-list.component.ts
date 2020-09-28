import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AllService } from '../services/all.service';
import { CartItem } from '../cart/cart-item';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  filteredProducts: Product[] = [];
  _products: Product[] = [];
  _filterBy: string;
  _orderBy: string;
  filteredEmpty: boolean = false;
  pag: number = 1;
  count: number = 6;
  
  constructor(private productService: AllService){}

  ngOnInit(): void{
    this._products = this.productService.retrieveAll();
    this.filteredProducts = this._products;
  }

  set orderBy(value: string){
    this._orderBy = value;
    if(value === 'low-price'){
      this.filteredProducts = this.filteredProducts.sort( (a,b) => a.price - b.price);
    }else if(value === 'high-price'){
      this.filteredProducts = this.filteredProducts.sort( (a,b) => b.price - a.price);
    }else{
      return;
    }
  }

  set filter(value: string){
    this._filterBy = value;
    this.filteredProducts = this._products.filter((product: Product) => product.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);

    if(this.filteredProducts.length === 0){
      this.filteredEmpty = true;
    } else{
      this.filteredEmpty = false;
    }
  }

  get filter(){
    return this._filterBy;
  }

  addToCart(item: CartItem):void{
    this.productService.addProductToCart(item);
  }
}