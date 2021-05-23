import { Component, OnInit } from '@angular/core';
import { MobilesService } from 'src/app/mobiles.service';
import { Mobile } from 'src/app/models/mobile.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  mobiles:Mobile[];
  constructor(private mobObj:MobilesService) { }

  ngOnInit(): void {
    this.mobObj.getMobilesData().subscribe(
      data=>{ 
        this.mobiles = data;
      },
      err=>{console.log("error in getting mobile of admin",err)}
    )
  }

}
