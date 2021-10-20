import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-c1402',
  templateUrl: './c1402.component.html',
  styleUrls: ['./c1402.component.css']
})
export class C1402Component implements OnInit {

  nom = new FormControl('',[Validators.required,this.monValidateur]);
  couleur = new FormControl('',[Validators.required]);
  majeur = new FormControl('',[Validators.required]);

  monFormulaire = new FormGroup({
    leNom: this.nom,
    laCouleur: this.couleur,
    leMajeur: this.majeur,
  });

  ngOnInit(): void {
  }

  constructor(){
  }

  monValidateur(champ:FormControl){
    if(champ.value === "Chuck Norris"){
      return {mauvaisNom:true}
    } else {
      return null;
    }
  }

}
