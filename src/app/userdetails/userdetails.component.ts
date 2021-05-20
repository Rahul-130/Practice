import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  objUser;
  constructor(private ts:TestService, private ar:ActivatedRoute) { }

  ngOnInit(): void {
    //get id from url
    let id = this.ar.snapshot.params.id;

    //get data from users with current id
    this.ts.getUserById(id).subscribe(
      userDataInfo=>{
        this.objUser = userDataInfo;
      },
      err=>{ console.log("error in getting user deatails from the curret id",err)}
    )
  }

}
