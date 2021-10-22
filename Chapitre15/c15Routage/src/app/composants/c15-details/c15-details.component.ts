import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c15-details',
  templateUrl: './c15-details.component.html',
  styleUrls: ['./c15-details.component.css']
})
export class C15DetailsComponent implements OnInit {

  idTechSelect:any = '';

  constructor(private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    // let idTemp = this.routeActive.snapshot.paramMap.get('id');
    // this.idTechSelect = idTemp;
    this.idTechSelect = this.routeActive.snapshot.paramMap.get('id');
  }

}
