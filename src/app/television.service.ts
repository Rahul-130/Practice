import { Injectable } from '@angular/core';
import { product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TelevisionService {

  constructor() { }

  private tvs:product[]=[
    {
    productTitle:"LG 139 cm (55 inch) Ultra HD (4K) LED Smart TV  (55UM7290PTD)",
    description:"The LG Ultra HD LED Smart TV comes with a 4K IPS display that lets you enjoy your content in its finest details. With a wide viewing angle that lets you enjoy the action from any angle, the television also comes with a 4k Active HDR feature that enhances your content with stunning resolution and bright colours. The television’s wireless connectivity, content store and many more innovative features are bound to keep you entertained.",
    productImage:"https://rukminim1.flixcart.com/image/416/416/kljrvrk0/television/7/h/p/55um7290ptd-lg-original-imagynkhwqy2bzpw.jpeg?q=70",
    price:83990
    },
    {
    productTitle:"Nokia 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV with Sound by Onkyo  (55TAUHDN)",
    description:"Bring home this TV from Nokia and deep-dive into a world of lifelike colours. Boasting a sleek and stunning design, this TV features Micro Dimming and a MaxBrite Display to ensure that you enjoy clear and crisp detail with vibrant colours.",
    productImage:"https://rukminim1.flixcart.com/image/416/416/kfwvcsw0/television/g/k/z/nokia-55tauhdn-original-imafw8xffqkuzjhu.jpeg?q=70",
    price:40999
    },
    
    {
    productTitle:"MOTOROLA ZX 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV with Wireless Gamepad  (55SAUHDM)",
    description:"Whether you're watching a movie, your favourite TV show, or playing a game on a console with your friends, this Ultra HD (4K) LED Smart Android TV from Motorola is here to transform your entertainment experience. While features such as AutoTuneX Display Technology and Dolby Vision + HDR 10 provide stunning visual quality, the AmphiSoundX feature provides an amazing sound experience. Also, with this TV's remote that comes with Hotkeys and Google Assistant, finding and navigating content is a piece of cake.",
    productImage:"https://rukminim1.flixcart.com/image/416/416/k3hmj680/television/e/b/r/motorola-65sauhdm-original-imafm59fztjjshhm.jpeg?q=70",
    price:61600
    },
    
    {
    productTitle:"SONY BRAVIA X7400H 138.8 cm (55 inch) Ultra HD (4K) LED Smart Android TV  (KD-55X7400H)",
    description:"Bring home this elegantly designed Smart TV from Sony and watch your favourite movies, TV shows and more in mesmerizing colours and contrast. You can even browse and install a large number of applications from a store of over 5000 applications. The Triluminos display showcases your content in the best possible colour and gives you a truly immersive experience. It also comes with a dedicated Netflix button.",
    productImage:"https://rukminim1.flixcart.com/image/416/416/kd4uj680/television/g/8/8/sony-kd-55x7400h-original-imafu3nnwz2guq8u.jpeg?q=70",
    price:94900
    },

    {
    productTitle:"PHILIPS 8200 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV  (55PUT8215/94)",
    description:"Be it the ongoing Champions League, blockbuster movies, or live news, you can enjoy it all by bringing home the Phillips 139 cm (55) 4K UHD LED Android TV. Thanks to its DTS Play-Fi technology, it can connect to multiple compatible speakers to provide you with an enhanced audio experience. Furthermore, this TV supports HDR10+ technology for immersive picture quality and lifelike visuals.",
    productImage:"https://rukminim1.flixcart.com/image/416/416/kmqn3bk0/television/v/p/f/55put8215-94-philips-original-imagfkpbcqsg5hkq.jpeg?q=70",
    price:89990
    },
      
    {
    productTitle:"SAMSUNG Q70RAK 138 cm (55 inch) QLED Ultra HD (4K) Smart TV  (QA55Q70RAKXXL)",
    description:"Here’s a television that can bring to you a magical viewing experience. Enjoy your favourite tv shows, movies and serials with this Samsung TV’s view-enhancing features such as Direct Full Array 4X and Quantum HDR 8X. You can also switch between different channels and adjust the volume using your voice, thanks to its Intelligent Voice Control feature.",
    productImage:"https://rukminim1.flixcart.com/image/416/416/k251k7k0/television/n/4/z/samsung-qa65q70rakxxl-original-imafhnvzbhyygwyq.jpeg?q=70",
    price:169900
    }
 ];

 getTelevisionData(){
   return this.tvs;
 }

}
