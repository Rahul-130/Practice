import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Mobile } from '../models/mobile.model';
import { product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {
  //to recive data from parent as input
  @Input() productObj:Mobile;

  //create a custom event
  @Output() myEvent = new EventEmitter();

  sendProductDetailsToParent(productTitle){
    //emit data to parent
    this.myEvent.emit(productTitle);
  }
}
