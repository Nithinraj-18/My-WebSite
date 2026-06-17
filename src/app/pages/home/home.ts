import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  menuOpen = false;

  texts = [
    'Designing',
    'Developing',
    'Delivering'
  ];

  currentIndex = 0;

  currentText = this.texts[0];

  animate = false;

  ngOnInit() {

    setInterval(() => {

      this.animate = true;

      setTimeout(() => {

        this.currentIndex =
          (this.currentIndex + 1) % this.texts.length;

        this.currentText =
          this.texts[this.currentIndex];

        this.animate = false;

      }, 300);

    }, 2500);

  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}