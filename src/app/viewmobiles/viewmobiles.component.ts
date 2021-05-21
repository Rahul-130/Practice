import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';
import { Mobile } from '../models/mobile.model';
import { product } from '../models/product.model';

@Component({
  selector: 'app-viewmobiles',
  templateUrl: './viewmobiles.component.html',
  styleUrls: ['./viewmobiles.component.css']
})
export class ViewmobilesComponent implements OnInit {

  mobiles:Mobile[]=[];
  constructor(private mobileObj:MobilesService) { }

  ngOnInit(): void {
    this.mobileObj.getMobilesData().subscribe(
      mobileData=>{ 
        this.mobiles = mobileData
      },
      err=>{ console.log("error in mobile data view",err)}
    )
  }

}
