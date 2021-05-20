import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { testColor } from './models/testColor.model';
import { testUser } from './models/testUser.model';

@Injectable({
  providedIn: 'root'
})
export class TestService{

  //inject httpClint obj
  constructor(private hc:HttpClient) { }

  //to get user details from API
  getUsers():Observable<any>{
    return this.hc.get("http://localhost:3000/users")
  }

  //to get user id
  getUserById(id):Observable<any>{
   return this.hc.get("http://localhost:3000/users/"+id)
  }



}

  // getColorData():Observable<testColor>{
  //   return this.hc.get<testColor>("https://reqres.in/api/unknown")
  // }

  // getUserData():Observable<testUser[]>{
  //   return this.hc.get<testUser[]>("https://jsonplaceholder.typicode.com/users")
  // }

  // data:any;
  // //to handover data to other
  // getData(){
  //   return this.data;
  // }

  // //to recive data from other
  // setData(value){
  //   this.data=value;
  // }

