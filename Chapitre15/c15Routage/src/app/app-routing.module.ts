import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1501Component } from 'src/app/composants/c1501/c1501.component';
import { C1502Component } from 'src/app/composants/c1502/c1502.component';
import { C15Component } from 'src/app/composants/c15/c15.component';
import { C15DetailsComponent } from 'src/app/composants/c15-details/c15-details.component';
import { C15cComponent } from 'src/app/composants/c15c/c15c.component';
import { C15dComponent } from 'src/app/composants/c15d/c15d.component';
import { C15rComponent } from 'src/app/composants/c15r/c15r.component';
import { C15uComponent } from 'src/app/composants/c15u/c15u.component';
import { GardienService } from 'src/app/services/gardien.service';

const routes: Routes = [
  {
    path:'techno',component:C15Component,canActivate:[GardienService],
    children:[
      {path:':id',component:C15rComponent},
      {path:'ajout',component:C15cComponent},
      {path:'maj/:id',component:C15uComponent},
      {path:'suppr/:id',component:C15dComponent}
    ]
  },
  // {path:'abc',component:C1501Component},
  // {path:'xyz',component:C1502Component},
  // {path:'techno/:id',component:C15DetailsComponent},
  // {path: '**',component:C15Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
