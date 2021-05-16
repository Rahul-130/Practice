import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { testColor } from './models/testColor.model';

@Injectable({
  providedIn: 'root'
})
export class TestService{

  
  constructor(private hc:HttpClient) { }

  getColorData():Observable<testColor>{
    return this.hc.get<testColor>("https://reqres.in/api/unknown")
  }

  getUserData():Observable<any[]>{
    return this.hc.get<any[]>("https://jsonplaceholder.typicode.com/users")
  }

  // data:any;
  // //to handover data to other
  // getData(){
  //   return this.data;
  // }

  // //to recive data from other
  // setData(value){
  //   this.data=value;
  // }
}
