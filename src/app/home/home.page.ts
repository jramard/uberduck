import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  categories = [
    {
      name: 'Tous',
      imgName: 'folder'
    },
    {
      name: 'Fast-food',
      imgName: 'burger'
    },
    {
      name: 'Cadeaux',
      imgName: 'gifts'
    },
    {
      name: 'Apero',
      imgName: 'cocktail'
    },
    {
      name: 'Pharmacie',
      imgName: 'medicine'
    },
    {
      name: 'Courses',
      imgName: 'shopping-cart'
    },
    {
      name: 'Sport',
      imgName: 'soccer-ball-variant'
    },
    {
      name: 'Tech',
      imgName: 'monitor'
    },
    {
      name: 'Jeux',
      imgName: 'console'
    },
  ];

  favorites = [
    {
      name: 'Rosaparks',
      note: '4,7',
      type: 'fast-food',
      price: '$$',
      deliveryTime: '20-30',
      distance: '0,8',
      imgName: 'placeholder'
    },
    {
      name: 'Fnac',
      note: '4,3',
      type: 'Cadeaux',
      price: '$$',
      deliveryTime: '10-15',
      distance: '0,3',
      imgName: 'placeholder'
    },
    {
      name: 'LDLC',
      note: '4,5',
      type: 'Tech',
      price: '$$$',
      deliveryTime: '45-60',
      distance: '7,0',
      imgName: 'placeholder'
    },
    {
      name: 'Nike',
      note: '4,1',
      type: 'Sport',
      price: '$$',
      deliveryTime: '30-45',
      distance: '3,2',
      imgName: 'placeholder'
    },
    {
      name: 'Micromania',
      note: '3,7',
      type: 'Jeux',
      price: '$$$',
      deliveryTime: '30-45',
      distance: '1,4',
      imgName: 'placeholder'
    }
  ]

  slideOpts = {
    spaceBetween: 15,
    slidesPerView: 'auto',
  };

  ngOnInit() {
    // const mySwiper = new Swiper('.swiper-container', {
    //   spaceBetween: 15,
    //   slidesPerView: 'auto',
    // });
  }

}
