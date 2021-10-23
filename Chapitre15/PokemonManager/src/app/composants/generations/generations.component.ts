import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  generations = [
    'Generations I',
    'Generations II',
    'Generations III',
    'Generations IV',
    'Generations V',
    'Generations VI',
    'Generations VII',
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
