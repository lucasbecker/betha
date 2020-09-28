import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { CartItem } from  '../cart/cart-item';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllService{

  cartValue = new BehaviorSubject<number>(0);

  constructor() { }

  retrieveAll(): Product[] {
    return PRODUCTS;
  }

  retrieveById(id:number): Product{
    return PRODUCTS.find((productIterator: Product) => productIterator.id === id);
  }

  retrieveCart(): CartItem[]{
    return CARTITEMS;
  }

  addProductToCart(product: CartItem){
    if(product.amount === undefined || product.amount == 0){
      product.amount = 1;
      product.total = product.price * product.amount;
      CARTITEMS.push(product);
    } else{
      let item = CARTITEMS.find( (item: CartItem) => item.id === product.id);
      item.amount+= 1;
      item.total = item.price * item.amount;
    }
    this.updateCartValue( this.retrieveCartValue() );
    
  }

  retrieveCartValue(): number{
    return CARTITEMS.reduce((acc:number, item:CartItem) => acc + item.amount, 0);
  }

  updateCartValue(value: number){
    this.cartValue.next(value);
  }

  catchCartValue(){
    return this.cartValue;
  }
  
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Produto Um',
    imageUrl:'/assets/images/placeholder.png',
    price: 19.99
  },
  {
    id: 2,
    name: 'Produto Dois',
    imageUrl:'/assets/images/placeholder.png',
    price: 29.99
  },
  {
    id: 3,
    name: 'Produto Três',
    imageUrl:'/assets/images/placeholder.png',
    price: 39.99
  },
  {
    id: 4,
    name: 'Produto Quatro',
    imageUrl:'/assets/images/placeholder.png',
    price: 49.99
  },
  {
    id: 5,
    name: 'Produto Cinco',
    imageUrl:'/assets/images/placeholder.png',
    price: 59.99
  },
  {
    id: 6,
    name: 'Produto Seis',
    imageUrl:'/assets/images/placeholder.png',
    price: 69.99
  },
  {
    id: 7,
    name: 'Produto Sete',
    imageUrl:'/assets/images/placeholder.png',
    price: 79.99
  },
  {
    id: 8,
    name: 'Produto Oito',
    imageUrl:'/assets/images/placeholder.png',
    price: 89.99
  },
  {
    id: 9,
    name: 'Produto Nove',
    imageUrl:'/assets/images/placeholder.png',
    price: 99.99
  },
  {
    id: 10,
    name: 'Produto Dez',
    imageUrl:'/assets/images/placeholder.png',
    price: 109.99
  },
  {
    id: 11,
    name: 'Produto Onze',
    imageUrl:'/assets/images/placeholder.png',
    price: 119.99
  },
  {
    id: 12,
    name: 'Produto Doze',
    imageUrl:'/assets/images/placeholder.png',
    price: 129.99
  },
  {
    id: 13,
    name: 'Produto Treze',
    imageUrl:'/assets/images/placeholder.png',
    price: 139.99
  },
  {
    id: 14,
    name: 'Produto Quatorze',
    imageUrl:'/assets/images/placeholder.png',
    price: 149.99
  },
  {
    id: 15,
    name: 'Produto Quinze',
    imageUrl:'/assets/images/placeholder.png',
    price: 159.99
  },
  {
    id: 16,
    name: 'Produto Dezesseis',
    imageUrl:'/assets/images/placeholder.png',
    price: 169.99
  },
  {
    id: 17,
    name: 'Produto Dezessete',
    imageUrl:'/assets/images/placeholder.png',
    price: 179.99
  },
  {
    id: 18,
    name: 'Produto Dezoito',
    imageUrl:'/assets/images/placeholder.png',
    price: 189.99
  },
  {
    id: 19,
    name: 'Produto Dezenove',
    imageUrl:'/assets/images/placeholder.png',
    price: 199.99
  },
  {
    id: 20,
    name: 'Produto Vinte',
    imageUrl:'/assets/images/placeholder.png',
    price: 209.99
  },
  {
    id: 21,
    name: 'Produto Vinte Um',
    imageUrl:'/assets/images/placeholder.png',
    price: 219.99
  },
  {
    id: 22,
    name: 'Produto Vinte Dois',
    imageUrl:'/assets/images/placeholder.png',
    price: 229.99
  },
  {
    id: 23,
    name: 'Produto Vinte Três',
    imageUrl:'/assets/images/placeholder.png',
    price: 239.99
  },
  {
    id: 24,
    name: 'Produto Vinte Quatro',
    imageUrl:'/assets/images/placeholder.png',
    price: 249.99
  }
]

const CARTITEMS: CartItem[] = []