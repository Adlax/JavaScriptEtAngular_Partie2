import { Component, OnInit } from '@angular/core';
import { MonFormulaire } from 'src/app/modeles/mon-formulaire';

@Component({
  selector: 'app-c1401',
  templateUrl: './c1401.component.html',
  styleUrls: ['./c1401.component.css']
})
export class C1401Component implements OnInit {

  monFormulaire = new MonFormulaire('','',false);

  constructor() { }

  ngOnInit(): void {
  }

}
