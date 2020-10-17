import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  parralax;
  searchingFor = [];
  tags = ['Responsive', 'JS/HTML/CSS', 'Angular', 'Commercial Use', 'Doodles', 'Finished', 'Science', 'Sass', 'Canvas', '3d', 'API', 'Webpack', 'Wordpress', 'In progress'];
  searchResults = [];

  projects = [
    {
      name: 'Styly Blog',
      photo: 'assets/projectImg/blog.png',
      desc: 'Pure front-end design for style-themed blog website. It is possible to make and save posts on /newPost',
      tags: ['Responsive', 'Angular', 'Finished', 'Canvas'],
      code: 'https://github.com/Soldacium/blogStyly/',
      web: 'https://soldacium.github.io/blogStyly/'
    },
    {
      name: 'Pathfinding',
      photo: 'assets/projectImg/pathfinding.png',
      desc: 'Visual presentation on Dijkstra pathfinding algorithm. First made with python, later on implemented in javascript and HTML Canvas. In future, there will be other forms of pathfiding algorithms implemented ',
      tags: ['Angular', 'Finished', 'Canvas'],
      code: 'https://github.com/Soldacium/pathfinding/',
      web: 'https://soldacium.github.io/pathfinding/'
    },
    {
      name: 'Forkify',
      photo: 'assets/projectImg/forkify.png',
      desc: 'Project made to seach, find and display recipies using Spoonacular API. Design from Javascript course, solidified my knowledge of JS in modern websites',
      tags: ['Responsive', 'Finished', 'JS/HTML/CSS', 'API', 'Webpack'],
      code: 'https://github.com/Soldacium/Food/',
      web: 'https://soldacium.github.io/Food/'
    },
    {
      name: 'Budgety',
      photo: 'assets/projectImg/budget1.png',
      desc: 'Learned basic operations, JS controller model',
      tags: ['Finished', 'JS/HTML/CSS'],
      code: 'https://github.com/Soldacium/budgetJS/',
      web: 'https://soldacium.github.io/budgetJS/'
    },
    {
      name: 'Travel',
      photo: 'assets/projectImg/travel.png',
      desc: 'Travelling template for travelling people. Check hotels, flights, opinions and so on',
      tags: ['Responsive', 'Angular', 'In progress'],
      code: 'https://github.com/Soldacium/AngularTravel/',
      web: 'https://soldacium.github.io/AngularTravel/'
    },
    {
      name: 'Aquarium',
      photo: 'assets/projectImg/zoo.png',
      desc: 'Template for local zoo/aquarium. Check out all available fishes, buy tickets and have fun!',
      tags: ['Responsive', 'Angular', 'In progress'],
      code: 'https://github.com/Soldacium/Aquarium/',
      web: 'https://soldacium.github.io/Aquarium/'
    },
    {
      name: 'Elena',
      photo: 'assets/projectImg/elena.png',
      desc: 'Simple website for practising responsive web design and flexbox',
      tags: ['Responsive', 'Angular', 'In progress'],
      code: 'https://github.com/Soldacium/SimplePhotoWeb/',
      web: 'https://soldacium.github.io/SimplePhotoWeb/'
    },
    {
      name: 'PIG game',
      photo: 'assets/projectImg/pig.png',
      desc: 'Game of rolling dices, furthering my understanding of JavaScript',
      tags: ['Responsive', 'Angular', 'In progress'],
      code: 'https://github.com/Soldacium/diceJS/',
      web: 'https://soldacium.github.io/diceJS/'
    },
    {
      name: 'Notty',
      photo: 'assets/projectImg/notty.png',
      desc: 'Having discovered LocalStorage API, 5MB of saving possibilities, I immidately jumped to building note/toDo/planning app. Everything saved on your browser. No install, no login.',
      tags: ['Responsive', 'Finished', 'Angular', 'API', 'Canvas'],
      code: 'https://github.com/Soldacium/toDo/',
      web: 'https://soldacium.github.io/toDo/'
    },
    {
      name: 'ChatV1',
      photo: 'assets/projectImg/chatV1.png',
      desc: 'One of the first attempts on using backend with help of Firebase. Register, login, send messages. Simple, but opens road to more complicated webs.',
      tags: ['Finished', 'Angular', 'API'],
      code: 'https://github.com/Soldacium/chatV1/',
      web: 'https://soldacium.github.io/chatV1/'
    },

  ];

  inProgressProjects = [

  ]
  constructor() { }

  ngOnInit() {

    document.body.scrollTop = 0;
    this.parralax = document.querySelector('.listing');
    this.parralax.style.top = (-window.innerHeight * 0.3) + 'px';
    window.addEventListener('scroll', (e) => {
      let number =  window.pageYOffset;

      if ( number < window.innerHeight) {
        this.parralax.style.top = (-window.innerHeight * 0.3 + (number * 0.2)) + 'px';
      }
    });

    this.pickCategory('Finished')


    /*
    for (let i = 0; i < 10; i++) {
      const proj = {name: 'project',
        photo: 'photo.jpg',
        desc: 'lorem ipsum',
        tags: ['Reactive', 'Angular']};

      this.projects.push(proj);
      this.searchResults = this.projects;
    }
    */
  }

  pickCategory(category) {
    const nah = this.searchingFor.includes(category);
    if (nah == false) {
      this.searchingFor.push(category);
    } else {

      this.searchingFor.splice(this.searchingFor.indexOf(category), 1);
    }

    console.log(this.searchingFor);
    if (this.searchingFor.length == 0) {
      this.searchResults = this.projects;
      console.log(this.projects, this.searchResults);
    } else {
      this.searchResults = [];
      this.projects.forEach((project) => {
        let isGood = 0;
        this.searchingFor.forEach((searchTerm) =>{
          if(project.tags.includes(searchTerm)){
            isGood += 1;
          }
        })
        if(this.searchingFor.length == isGood){
          this.searchResults.push(project)
        }
        /*
        const isGood = this.searchingFor.some(r => project.tags.includes(r));
        console.log(isGood);
        if (isGood == true) {
          this.searchResults.push(project);
        }
        */

      });
      console.log(this.searchResults);
    }

  }

}
