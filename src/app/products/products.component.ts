import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
      
  products:product[]=[
    {
      productTitle:"POCO M3",
      description:"6 GB RAM | 128 GB ROM | Expandable Upto 256 GB 16.51 cm (6.5 inch) HD+ Display 13MP + 2MP + 2MP | 16MP Front Camera 5000 mAh Lithium-ion Polymer Battery Qualcomm Snapdragon 460 Processor",
      productImage:"https://rukminim1.flixcart.com/image/416/416/kklhbbk0/mobile/h/i/q/m3-mzb087ain-poco-original-imafzxf8zqkcgwfv.jpeg?q=70",
      price:12000
      },
      {
      productTitle:"OPPO A53",
      description:"6 GB RAM | 128 GB ROM | Expandable Upto 256 GB 16.51 cm (6.5 inch) HD+ Display 13MP + 2MP + 2MP | 16MP Front Camera 5000 mAh Lithium-ion Polymer Battery Qualcomm Snapdragon 460 Processor",
      productImage:"https://rukminim1.flixcart.com/image/416/416/kmmcrrk0/mobile/y/l/m/a53-cph2127-oppo-original-imagfgzsh5awf364.jpeg?q=70",
      price:13500
      },
      
      {
      productTitle:"realme X50 Pro",
      description:"12 GB RAM | 256 GB ROM 16.36 cm (6.44 inch) Full HD+ Display 64MP + 12MP + 8MP + 2MP | 32MP + 8MP Dual Front Camera 4200 mAh Battery 5G Phone Qualcomm Snapdragon 865 Processor 65W Superdart Charge",
      productImage:"https://rukminim1.flixcart.com/image/416/416/k6zda4w0/mobile/h/y/8/realme-x50-pro-rmx2076-original-imafpbbvbwfcpz2r.jpeg?q=70",
      price:47000
      },
      
      {
      productTitle:"ASUS ROG Phone 5",
      description:"8 GB RAM | 128 GB ROM 17.22 cm (6.78 inch) Full HD+ Display 64MP + 13MP + 5MP | 24MP Front Camera 6000 mAh Lithium Polymer Battery Qualcomm Snapdragon 888 (SM8350) Processor",
      productImage:"https://rukminim1.flixcart.com/image/416/416/km2clu80/mobile/8/r/x/rog-phone-5-zs673ks-1a053in-asus-original-imagff5hufbu4eg5.jpeg?q=70",
      price:49999
      },

      {
      productTitle:"ViVO X60 Pro",
      description:"12 GB RAM | 256 GB ROM 16.66 cm (6.56 inch) Full HD+ Display 48MP + 13MP + 13MP | 32MP Front Camera 4200 mAh Lithium-ion Battery Qualcomm Snapdragon 870 Processor AMOLED Display",
      productImage:"https://rukminim1.flixcart.com/image/416/416/kmns7m80/mobile/d/j/i/x60-pro-v2046-vivo-original-imagfht6jmwvuvvp.jpeg?q=70",
      price:49990
      },
        
      {
      productTitle:"SAMSUNG Galaxy S10 Lite",
      description:"8 GB RAM | 512 GB ROM | Expandable Upto 1 TB 17.02 cm (6.7 inch) Full HD+ Display 48MP + 12MP + 5MP | 32MP Front Camera 4500 mAh Lithium-ion Battery Qualcomm Snapdragon 855 (SM8150) Processor",
      productImage:"https://rukminim1.flixcart.com/image/416/416/k5o7r0w0/mobile/h/s/v/samsung-galaxy-s10-lite-sm-g770fzksinu-original-imafzaqnbjuffrvv.jpeg?q=70",
      price:45999
      },

  ];


  productsSentByChild=[];
  productCount:number=0;

  getProductDetailsFromChild(productTitle){
    this.productsSentByChild.push(productTitle);
    this.productCount++;
  }

}


