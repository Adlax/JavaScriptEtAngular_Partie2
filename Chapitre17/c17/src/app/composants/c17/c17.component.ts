import { Component, OnInit } from '@angular/core';
import { C17Service } from 'src/app/services/c17.service';

@Component({
  selector: 'app-c17',
  templateUrl: './c17.component.html',
  styleUrls: ['./c17.component.css']
})
export class C17Component implements OnInit {

  constructor(private service: C17Service) { }

  ngOnInit(): void {
  }

  surClick(){
    return this.service.uneMethodeDuService();
  }

}
