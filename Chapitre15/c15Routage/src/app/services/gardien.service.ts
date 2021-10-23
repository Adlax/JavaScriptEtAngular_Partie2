import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GardienService implements CanActivate {

  constructor() { }

  hasard: boolean = true;

  canActivate(): boolean {
    // return this.hasard = Math.random() > 0.5;
    return true;
  }

}
