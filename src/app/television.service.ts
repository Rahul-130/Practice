import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TelevisionService {

  constructor(private hc:HttpClient) { }

  
 getTelevisionData():Observable<product[]>{
   return this.hc.get<product[]>("http://localhost:3000/tv")
 }

}
