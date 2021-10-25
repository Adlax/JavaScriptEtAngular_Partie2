import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class C16Service {

  url = "https://api.agify.io/";

  constructor(private http: HttpClient) { }

  appelAPI(prenom:any){
    const params = new HttpParams().set('name',prenom).set('country_id','FR');
    if(prenom){
      return this.http.get(this.url, {params});
    } else {
      return this.http.get("https://api.agify.io/?name=android&country_id=FR");
    }
  }

}
