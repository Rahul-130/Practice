import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';
import { TelevisionService } from '../television.service'

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit {

  tvs:product[] = [];
  constructor(private tvsObj:TelevisionService ) { }

  ngOnInit() {
    this.tvsObj.getTelevisionData().subscribe(
      data=>{
        this.tvs = data;
      },
      err=>{ console.log("err is ",err)}
    )
  }
}
