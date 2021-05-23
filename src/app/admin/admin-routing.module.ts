import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeComponent } from '../bike/bike.component';
import { TelevisionComponent } from '../television/television.component';
import { AdminComponent } from './admin.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';

const routes: Routes = [{ path: '', component: AdminComponent },
  {path:'viewproducts', component:ViewproductsComponent, children:[
    {path:'mobiles', component:MobilesComponent},
    {path:'bike', component:BikeComponent},
    {path:'television', component:TelevisionComponent},
    {path:'', redirectTo:"mobiles", pathMatch:'full'}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
