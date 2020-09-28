import { Component, OnInit } from "@angular/core";
import { AllService } from '../services/all.service';
import { CartItem } from './cart-item';

@Component({
  styleUrls: ['./cart.component.css'],
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit{

  _cartItems: CartItem[] = [];
  cartEmpty: boolean = true;
  amountItems: number = 0;
  totalItems: number = 0;

  constructor(private cartService: AllService){ }
  
  ngOnInit(): void {
    this._cartItems = this.cartService.retrieveCart();
    this.update();
  }

  update(): void{
    this.amountItems = 0;
    this.totalItems = 0;

    this._cartItems.length > 0 ? this.cartEmpty = false : this.cartEmpty = true;
    this.cartService.updateCartValue( this.cartService.retrieveCartValue() );

    for(let i in this._cartItems){
      this.amountItems+= this._cartItems[i].amount;
      this.totalItems+= this._cartItems[i].total;
    }
  }

  increaseItem(item: CartItem) {
    item.amount += 1;
    item.total = item.price * item.amount;

    this.update();
  }
  
  decreaseItem(item: CartItem){
    item.amount -= 1;
    item.total = item.price * item.amount

    if(item.amount <= 0) this.removeItem(item.id);
    this.update();
  }

  removeItem(id: number) {
    this._cartItems.map( item => { if(item.id === id) item.amount = 0; })
    this._cartItems.splice( this._cartItems.findIndex( item => item.id == id), 1);
    this.update();
  }
}