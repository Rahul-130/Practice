import { Injectable, OnInit } from '@angular/core';
import { product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeService implements OnInit{

  constructor(private hc:HttpClient) { }
  ngOnInit() {
  }

  getBikeData():Observable<product[]>{
    return this.hc.get<product[]>("http://localhost:3000/bike");
  }




  // private bikes:product[]=[
  //   {
  //   productTitle:"Royal Enfield Classic 350",
  //   description:"Royal Enfield Classic 350 is a cruiser bikes available at a starting price of Rs. 1,68,178 in India. It is available in 7 variants and 13 colours with top variant price starting from Rs. 1,93,712. The Classic 350 is powered by 346cc BS6 engine which develops a power of 19.1 bhp and a torque of 28 Nm. With both front and rear disc brakes, Royal Enfield Classic 350 comes up with anti-locking braking system. This Classic 350 bike weighs 195 kg and has a fuel tank capacity of 13.5 liters.",
  //   productImage:"https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-classic-350-single-channel-abs--bs-vi20200303121804.jpg?q=85",
  //   price:168178
  //   },
  //   {
  //   productTitle:"Yamaha MT 15",
  //   description:"Yamaha MT 15 is a street bikes available at a starting price of Rs. 1,41,638 in India. It is available in 2 variants and 3 colours with top variant price starting from Rs. 1,42,638. The MT 15 is powered by 155cc BS6 engine which develops a power of 18.2 bhp and a torque of 13.9 Nm. With both front and rear disc brakes, Yamaha MT 15 comes up with anti-locking braking system. This MT 15 bike weighs 138 kg and has a fuel tank capacity of 10 liters.",
  //   productImage:"https://imgd.aeplcdn.com/393x221/bw/models/yamaha-mt-15-bs-vi20200204191522.jpg?q=85",
  //   price:141638
  //   },
    
  //   {
  //   productTitle:"KTM RC 125",
  //   description:"KTM RC 125 is a sports bikes available at a starting price of Rs. 1,69,318 in India. It is available in only 1 variant and 2 colours. The RC 125 is powered by 125cc BS6 engine which develops a power of 14.5 bhp and a torque of 12 Nm. With both front and rear disc brakes, KTM RC 125 comes up with anti-locking braking system.",
  //   productImage:"https://imgd.aeplcdn.com/393x221/n/cw/ec/45482/ktm-rc-125-front-three-quarter0.jpeg?q=85",
  //   price:169320
  //   },
    
  //   {
  //   productTitle:"Jawa Standard",
  //   description:"Jawa Standard is a cruiser bikes available at a starting price of Rs. 1,78,341 in India. It is available in 2 variants and 3 colours with top variant price starting from Rs. 1,87,314. The Standard is powered by 293cc BS6 engine which develops a power of 27 bhp and a torque of 27.05 Nm. With front disc and rear drum brakes, Jawa Standard comes up with anti-locking braking system. This Standard bike weighs 172 kg and has a fuel tank capacity of 14 liters.",
  //   productImage:"https://imgd.aeplcdn.com/393x221/bw/models/jawa-standard-single-channel-abs--bs-vi20200302120818.jpg?q=85",
  //   price:178340
  //   },

  //   {
  //   productTitle:"VSuzuki Hayabusa",
  //   description:"Suzuki Hayabusa is a super bikes available at a starting price of Rs. 16,43,445 in India. It is available in only 1 variant and 3 colours. The Hayabusa is powered by 1340cc BS6 engine which develops a power of 187.3 bhp and a torque of 150 Nm. With both front and rear disc brakes, Suzuki Hayabusa comes up with anti-locking braking system. This Hayabusa bike weighs 266 kg and has a fuel tank capacity of 20 liters.",
  //   productImage:"https://imgd.aeplcdn.com/393x221/bw/models/suzuki-hayabusa-standard20210426152114.jpg?q=85",
  //   price:1643445
  //   },
      
  //   {
  //   productTitle:"Bajaj Dominar 400",
  //   description:"Bajaj Dominar 400 is a street bikes available at a starting price of Rs. 2,02,503 in India. It is available in only 1 variant and 2 colours. The Dominar 400 is powered by 373.27cc BS6 engine which develops a power of 39.42 bhp and a torque of 35 Nm. With both front and rear disc brakes, Bajaj Dominar 400 comes up with anti-locking braking system. This Dominar 400 bike weighs 187 kg and has a fuel tank capacity of 13 liters.",
  //   productImage:"https://imgd.aeplcdn.com/393x221/bw/models/bajaj-dominar-400-standard--bs-vi20200403135546.jpg?q=85",
  //   price:202503
  //   }

  // ];

}
