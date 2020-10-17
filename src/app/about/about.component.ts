import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  events = [
  {
    title: 'string',
    icon: 'string',
    faLibrary: 'fab',
    content: 'string',
  },
  {
    title: 'string',
    icon: 'string',
    faLibrary: 'fab',
    content: 'string',
  },
  {
    title: 'string',
    icon: 'string',
    faLibrary: 'fab',
    content: 'string',
  },
  ];


  constructor() { }

  ngOnInit() {

  }

}

