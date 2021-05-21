import { Injectable, OnInit } from '@angular/core';
import { product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Mobile } from './models/mobile.model';

@Injectable({
  providedIn: 'root'
})
export class MobilesService implements OnInit{

  //inject HttpClint service obj
  constructor(private hc:HttpClient) { }

  ngOnInit(){
    
  }

  //to read all mobiles data
  getMobilesData():Observable<Mobile[]>{
   //http get
   return this.hc.get<Mobile[]>("http://localhost:3000/mobiles")
  }

  //to create / save new mobile 
  createNewMobile(mobileObj):Observable<any>{
    return this.hc.post("http://localhost:3000/mobiles",mobileObj)
  }

}
