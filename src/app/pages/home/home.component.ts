import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // création d'un array et d'un objet pour stocker les img
  imgTable = ['forest.jpg', 'city.jpg', 'finger.jpg'];
  imgJson = [
    {
      title: 'Forêt',
      url: 'forest.jpg',
      author: 'jean',
    },
    {
      title: 'City Skyline',
      url: 'city.jpg',
      author: 'paul',
    },
    {
      title: "Don't touch the screen",
      url: 'finger.jpg',
      author: 'franck',
    },
  ];

  //variable
  randomIndex = Math.floor(Math.random() * this.imgTable.length);
  sourceImg = this.imgTable[this.randomIndex];
  availableImg = '';

  //change d'image sur un hover
  changeRandom() {
    this.randomIndex = Math.floor(Math.random() * this.imgTable.length);
    this.sourceImg = this.imgTable[this.randomIndex];
    console.log('over');
  }

  //change la taille de l'image au hover
  transform = {};
  changeSize() {
    this.transform = {
      transform: 'scale(1.2)',
      transition: '.2s ease',
      'transform-origin': 'right',
      'box-shadow': '0 0 10px 0 rgb(143, 143, 143)',
    };
  }
  returnSize() {
    this.transform = {};
  }

  //variable pour changer le couleur du <p> au click
  textColor = false;

  textDisplay = true;

  //display Switch
  displaySwitch = 1;

  incSwitch() {
    setInterval(()=>{
      this.displaySwitch += 1;
      console.log(this.displaySwitch)
      if (this.displaySwitch > 3) {
        this.displaySwitch = 1;
      };
    }, 1000);
  };

  // incSwitch() {
  //   this.displaySwitch += 1;
  //   console.log(this.displaySwitch - 1);
  //   // this.displaySwitch = this.displaySwitch>3 ? 1 : this.displaySwitch;
  //   if (this.displaySwitch > 3) {
  //     this.displaySwitch = 1;
  //   }
  // }

  // decSwitch() {
  //   this.displaySwitch -= 1;
  //   console.log(this.displaySwitch - 1)
  //   // this.displaySwitch = this.displaySwitch>3 ? 1 : this.displaySwitch;
  //   if (this.displaySwitch < 1) {
  //     this.displaySwitch = 3;
  //   };
  // };

  constructor() {}

  ngOnInit(): void {
    console.log(this.randomIndex);
    console.log(this.imgJson[this.randomIndex].url);
    for (const element of this.imgJson) {
      this.availableImg += ` ${element.title} /`;
    }
    // this.incSwitch();
  }
}
