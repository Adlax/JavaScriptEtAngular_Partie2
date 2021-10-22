import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C15Component } from './composants/c15/c15.component';
import { C1501Component } from './composants/c1501/c1501.component';
import { C1502Component } from './composants/c1502/c1502.component';
import { C15DetailsComponent } from './composants/c15-details/c15-details.component';

@NgModule({
  declarations: [
    AppComponent,
    C15Component,
    C1501Component,
    C1502Component,
    C15DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
