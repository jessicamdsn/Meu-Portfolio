import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarrosselComponent {
  slides = [
    {
      name: 'Git',
      img: '../../../assets/logos/git.png',
    },
  
    {
      name: 'Angular',
      img: '../../../assets/logos/angular.png',
    },
  
    {
      name: 'Html5',
      img: '../../../assets/logos/html.png',
    },
  
    {
      name: 'Css3',
      img: '../../../assets/logos/css.png',
    },
  
    {
      name: 'JavaScript',
      img: '../../../assets/logos/js.png',
    },
  
    {
      name: 'TypeScript',
      img: '../../../assets/logos/ts.png',
    },
    {
      name: 'Java',
      img: '../../../assets/logos/java.png',
    },
    {
      name: 'Csharp',
      img: '../../../assets/logos/csharp.png',
    },
  ];
}
