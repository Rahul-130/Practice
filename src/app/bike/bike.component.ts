import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';
import {BikeService} from '../bike.service'

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  bikes:product[]=[];

  //inject obj of BikeService
  constructor(private bikeObj:BikeService) { }

  ngOnInit(): void {
    //obj init logic
    this.bikes = this.bikeObj.getBikeData();
  }

  

}
