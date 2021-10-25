import { Component, OnInit } from '@angular/core';
import { interval, Subscription, } from 'rxjs';

import { C16Service } from 'src/app/services/c16-service.service';

@Component({
  selector: 'app-c16',
  templateUrl: './c16.component.html',
  styleUrls: ['./c16.component.css']
})
export class C16Component implements OnInit {

  message: any;

  message2 = 'Attente du click';
  clique = false;
  promesse2: any;

  //obs1
  //monObs1 = interval(1000);
  //observateur
  //sub1: any;
  //compteur
  compteurObs1: any;

  compteurObs2: any;

  data: any;

  surClick(){
    this.message = new Promise( (resolve,reject) => {
      setTimeout(()=>{
        resolve('Promesse recue');
        reject('Erreur de promesse');
        console.log('log DANS la promesse(recue plus tard donc...)')
      },5000);
    } );
    console.log('log APRES la promesse(recue, au click, en premier donc...)');
  }

  appelDeLaPromesse(){
    this.clique = true;
    this.message2 = 'Clic fait, en attente...';
    this.promesse2 = new Promise( (resolve,reject)=>{
      setTimeout(() => {
        resolve('Promesse recue');
        reject('Erreur dans la promesse');
      }, 5000);
    } ).then( ()=>{
      this.clique = false;
      this.message2 = 'Promesse recue. Chargement termine';
    } ).catch( ()=>{
      this.clique = false;
      this.message2 = "Promesse echouee";
    } );
  }

  clickObs1(){
    // this.sub1 = this.monObs1.subscribe( (x)=> this.compteurObs1 = x );
    interval(1000).subscribe( x => this.compteurObs1=x);
  }

  // clickObs2(){
  //   // this.sub1 = this.monObs1.subscribe( (x)=> this.compteurObs1 = x );
  //   interval(1000).pipe( filter(num=>num%2===0), map( num=>num*0.244 ) ).subscribe( x => this.compteurObs2=x);
  // }

  rechercheAPI(prenom:any){
    this.monServiceAPI.appelAPI(prenom).subscribe( (data) => this.data=data );
  }

  constructor(private monServiceAPI: C16Service) { }

  ngOnInit(): void {
  }

}
