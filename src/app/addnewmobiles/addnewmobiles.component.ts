import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobilesService } from '../mobiles.service';
import { Mobile } from '../models/mobile.model';

@Component({
  selector: 'app-addnewmobiles',
  templateUrl: './addnewmobiles.component.html',
  styleUrls: ['./addnewmobiles.component.css']
})
export class AddnewmobilesComponent implements OnInit {

  constructor(private mobileObj:MobilesService, private router:Router) { }

  ngOnInit(): void {
  }

  mobileModel=new Mobile('','','','');
  onSubmitNewMObile(){
  
    this.mobileObj.createNewMobile(this.mobileModel).subscribe(
      res=>{ 
        //navigate to viewmobiles
        this.router.navigateByUrl('products/mobiles')
      },
      err=>{console.log(" err in creating new mobile",err)}
    )
    
  }

}
