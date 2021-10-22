import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1501Component } from 'src/app/composants/c1501/c1501.component';
import { C1502Component } from 'src/app/composants/c1502/c1502.component';



const routes: Routes = [
  {path:'abc',component:C1501Component},
  {path:'xyz',component:C1502Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
