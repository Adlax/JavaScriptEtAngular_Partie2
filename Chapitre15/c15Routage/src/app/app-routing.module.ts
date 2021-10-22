import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1501Component } from 'src/app/composants/c1501/c1501.component';
import { C1502Component } from 'src/app/composants/c1502/c1502.component';
import { C15Component } from 'src/app/composants/c15/c15.component';
import { C15DetailsComponent } from 'src/app/composants/c15-details/c15-details.component';

const routes: Routes = [
  {path:'abc',component:C1501Component},
  {path:'xyz',component:C1502Component},
  {path:'techno/:id',component:C15DetailsComponent},
  {path: '**',component:C15Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
