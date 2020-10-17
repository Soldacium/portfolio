import { Component, OnInit, HostListener, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT} from '@angular/common';
/*tslint:disable*/
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  canvas ;
  circle;
  circleArray = [];
  ctx;
  rad = 30;

  mouse = {
      x: undefined,
      y: undefined
    };

    mouse2 = {
      x: undefined,
      y: undefined
    };

    window;
    parralax;
    section = 0;
    

  canvas2;
  ctx2;
  canvasWrapper;

  constructor( @Inject(DOCUMENT) private document: Document,
  ) {
    this.window = this.document.defaultView
  }

  


  ngOnInit() {
    this.canvas = document.getElementById('canvas');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight * 1.1;
    this.canvas.style.backgroundColor = 'rgba(13,13,13,1)';
    this.ctx = this.canvas.getContext('2d');

    /**** CREATE ELEMENTS */
    

    for (let i = 0; i < 400; i++) {
      const minRadius = Math.random() * 5 + 1;
      const radius = Math.random() * 2 + 0.5;
      const x = Math.random() * (innerWidth - this.rad * 2) + this.rad;
      const dx = Math.floor((Math.random() *2))*Math.random()*2.14 ;

      const y = Math.random() * (innerHeight - this.rad* 2) + this.rad;
      const dy = Math.floor((Math.random() *2))*Math.random()*2.14 ;

      this.circleArray.push(new Circle(x, y, dx, dy, radius, minRadius, this.ctx, this.mouse));

    }

/******* SCROLLING */


    this.parralax = this.document.querySelector('.canvasDiv')
    let elem: HTMLDivElement = this.document.querySelector('.section2')
    this.window.addEventListener('scroll',(e) =>{
      let number =  window.pageYOffset;
      if (number > window.innerHeight*6/2){
        this.section = 3;
      }
      else if (number > window.innerHeight*3/2){
        this.section = 2;
        
      }
      else if (number > window.innerHeight/2){
        this.section = 1;
        
      }
      else if (number > 0){
        this.section = 0;
        
      }
      if( number < this.window.innerHeight){
        this.parralax.style.top = (number * 0.7) + 'px';
      }else{
        
        elem.style.top = (-this.window.innerHeight * 0.5+(number * 0.25)) + 'px';
      }
    })


    /*****MOUSEMOVE***** */

    this.canvas.addEventListener('mousemove', (event) => {
      this.mouse.x = event.x;
      this.mouse.y = event.y;

    });




/**** RESIZE */

    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
/*
      this.canvas2.width = this.canvasWrapper.offsetWidth
      this.canvas2.height = this.canvasWrapper.offsetHeight
      this.drawImg(this.canvas2,this.ctx2)
    */  
    });
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(
        [this.animate(),
          ]
        ), 2700);
      });      
  }





  ngAfterViewInit(){
    //this.drawImg(this.canvas2,this.ctx2)
  }



  goTo(sectionNum) {
    document.body.scrollTop = sectionNum * window.innerHeight;
    document.documentElement.scrollTop = sectionNum * window.innerHeight;
  }

  animate() {
    requestAnimationFrame(() => {this.animate(); });
    this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.circleArray.length; i++) {
      this.circleArray[i].update();
    }



    
  }

  dots2() {
    /*
    this.ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    ctx.fillStyle = this.color;
    ctx.fill();*/
  }
}



export function Circle(x, y, dx, dy, radius, minRadius, ctx, mouse) {
  this.x = x;
  this.y = y;
  this.ctx = ctx;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = minRadius;

  this.colorArray = [
    /*
    '#000000',
    '#444444',
    '#660066',
    '#FF5505',
    '#8030FA',*/

    'hsl(356, 84%, 41%)',
    'hsl(208, 100%, 56%)',
    'hsl(346, 84%, 61%)',
    'hsl(326, 94%, 51%)',
    

  ];

  this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];




  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    ctx.fillStyle = this.color;
    ctx.fill();
  };



  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    this.x += this.dx;

    if ( this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.y += this.dy;

    if(Math.random()*1000 > 989){
      let iks = this.dx;
      this.dx = -this.dy;
      this.dy = iks;
    }

    // interactivity
/*
    if (mouse.x - this.x < 75 && mouse.x - this.x > -75
      && mouse.y - this.y < 75 && mouse.y - this.y > -75) {
      if (this.radius < 40) { // maxRadius of circle
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) { // minRadius
      this.radius -= 1;
    }
*/
    this.draw();
  };
}

export function Point(x, y, radius,border, connectiosn,canvas, ctx, mouse) {

}
