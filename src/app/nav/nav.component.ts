import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  active: boolean = false;
  
  constructor(public router: Router) { }

  ngOnInit() {
  }

  change(){
    this.active = !this.active;
    console.log('yass')
  }
}
