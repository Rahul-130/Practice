import { Component, OnInit } from '@angular/core';
import {MobilesService} from '../mobiles.service';
import { Mobile } from '../models/mobile.model';
import {product} from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

  mobiles:Mobile[]=[];

  //inject obj of MobileService class
  constructor(private mobileObj:MobilesService) {}

  // ngOnInit(){
  //   //object init logic
  //   this.mobiles = this.mobileObj.getMobilesData();
  // }

  ngOnInit(){
    this.mobileObj.getMobilesData().subscribe(
      data=>{ 
        this.mobiles=data;
      },
      err=>{ console.log("error is ",err) })
  }

}
