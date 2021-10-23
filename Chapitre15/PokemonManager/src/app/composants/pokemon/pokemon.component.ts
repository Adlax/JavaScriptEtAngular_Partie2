import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  // @Input() pokemon:{id:number, nom:string, img:string, categorie:string, types:string[], taille:number, poids:number};

  @Input() pokemon:any;

  @Output() evnt = new EventEmitter();

  selection(pokemon:any){
    this.evnt.emit(pokemon);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
