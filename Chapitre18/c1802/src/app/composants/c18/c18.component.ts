import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c18',
  templateUrl: './c18.component.html',
  styleUrls: ['./c18.component.css']
})
export class C18Component implements OnInit {

  jedis: string[] = ['anakin','yoda','rachid'];

  constructor() { }

  ngOnInit(): void {
  }

  surClick(prenom: string) {
    if(prenom && this.jedis.indexOf(prenom)===-1){
      this.jedis.push(prenom);
    }
  }

}
