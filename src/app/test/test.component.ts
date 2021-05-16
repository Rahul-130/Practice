import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { testColor } from '../models/testColor.model'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  color:testColor;
  users:any[]=[];
  constructor(private obj:TestService) { }

  ngOnInit(): void {
    this.obj.getColorData().subscribe(
      data=>{this.color = data},
      err=>{ console.log("color err is ",err)}
    )

    this.obj.getUserData().subscribe(
      data=>{this.users = data},
      err=>{ console.log("users err is ", err) }
    )

  }




}
