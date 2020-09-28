import { Component, OnInit } from '@angular/core';
import { AllService } from '../services/all.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Betha';
  
  cartValue;

  constructor(private cartService: AllService){}

  ngOnInit(){
    this.cartValue = this.cartService.catchCartValue().subscribe()
  }

  get cart(): number{
    return this.cartService.catchCartValue().value;
  }
  
}