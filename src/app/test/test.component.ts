import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { testColor } from '../models/testColor.model'
import { testUser } from '../models/testUser.model';
import { Router } from '@angular/router'
import {Observable, Subscribable} from 'rxjs'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // color:testColor;
  users;
  mySubscription;
  constructor(private tsObj:TestService, private router:Router) { }

  ngOnInit(): void {

    let mySubscription = this.tsObj.getUsers().subscribe(
      userData=>{ this.users= userData},
      err=>{ console.log("Error in users data", err)}
    )
    
  }

  onSelectId(id){
    this.router.navigateByUrl('test/'+id)
  }
  

  // ngOnDestroy(){
  //   this.mySubscription.unsubscribe();
  // }
  
}




    //color data
    // this.obj.getColorData().subscribe(
    //   data=>{this.color = data},
    //   err=>{ console.log("color err is ",err)}
    // )
    // //user Data
    // this.obj.getUserData().subscribe(
    //   data=>{this.users = data},
    //   err=>{ console.log("users err is ", err) }
    // )
