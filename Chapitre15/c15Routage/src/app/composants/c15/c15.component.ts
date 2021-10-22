import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c15',
  templateUrl: './c15.component.html',
  styleUrls: ['./c15.component.css']
})
export class C15Component implements OnInit {

  technologies = [
    {id:1,nom:'JavaScript',frameworks:['Angular','Vue','React']},
    {id:2,nom:'Python',frameworks:['Django','Flask']},
    {id:3,nom:'Go',frameworks:['Go']}
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  selectionTechno(techno:any){
    this.router.navigate(['techno',techno.id]);
  }

}
