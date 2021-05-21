import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewmobilesComponent } from './addnewmobiles/addnewmobiles.component';
import { BikeComponent } from './bike/bike.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionComponent } from './television/television.component';
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewmobilesComponent } from './viewmobiles/viewmobiles.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'contactUs', component:ContactUsComponent},
  {path:'test',component:TestComponent},
  {path:'test/:id', component:UserdetailsComponent},
  {path:'products', component:ProductsComponent, children:[
    {path: 'mobiles', component:MobilesComponent, children:[
      {path:'viewmobiles', component:ViewmobilesComponent},
      {path:'addnewmobiles', component:AddnewmobilesComponent},
      {path:'', redirectTo:'/products/mobiles/viewmobiles', pathMatch:'full'}
    ]},
    {path: 'bike', component:BikeComponent},
    {path: 'television', component:TelevisionComponent},
    {path: '', redirectTo:'/products/mobiles',pathMatch:'full'},
  ]},
  


  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
