import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemons.service';
import { FormRecherchePokemon } from 'src/app/modeles/form-recherche-pokemon';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons:{id:number, nom:string, img:string, categorie:string, types:string[], taille:number, poids:number}[] = [];
  comptage:number = 0;
  pokemonSelectionne:any;
  faOptinMonster = faOptinMonster;
  formRecherchePokemon = new FormRecherchePokemon('');
  easterEgg = false;

  constructor(private pokService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemons = this.pokService.getPokemons();
    this.comptage = this.pokService.comptagePokemons();
  }

  recherchePokemon(nom:string){
    this.pokemons = this.pokService.recherchePokemon(nom);
    if( nom === "C3PO" ){
      this.easterEgg = true;
    } else {
      this.easterEgg = false;
    }
  }

  annulerRecherche(){
    this.ngOnInit();
    this.formRecherchePokemon.setNom(''); //remettre nom a '';
  }

}
