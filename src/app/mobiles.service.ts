import { Injectable, OnInit } from '@angular/core';
import { product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobilesService implements OnInit{

  //inject HttpClint service obj
  constructor(private hc:HttpClient) { }

  ngOnInit(){
    
  }

  getMobilesData():Observable<product[]>{
   //http get
   return this.hc.get<product[]>("assets/mobiles.json")
  }

}
