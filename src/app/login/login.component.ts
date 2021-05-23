import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(ref){
    let userLoginObj = ref.value;
    //if username & password are admin, then only navigate to admin component
    if(userLoginObj.username!='admin'){
      alert("Invalid Username")
    }else if(userLoginObj.password!='admin'){
      alert("invalid Password")
    }else{
      //navigate to admin component
      this.router.navigateByUrl("/admin")
    }
  }

}
