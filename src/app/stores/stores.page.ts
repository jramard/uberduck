import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {

  constructor() { }

  stores = [
    {
      name: 'Rosaparks',
      rating: '4,3',
      type: 'Fast-food',
      price: '$$',
      deliveryTime: '40-50',
      distance: '2,4',
      imgName: 'placeholder'
    },
    {
      name: 'O\'Tacos',
      rating: '4,1',
      type: 'Fast-food',
      price: '$$$',
      deliveryTime: '40-50',
      distance: '1,2',
      imgName: 'placeholder'
    },
    {
      name: 'Little Korea',
      rating: '4,5',
      type: 'Fast-food',
      price: '$$$',
      deliveryTime: '40-50',
      distance: '1,7',
      imgName: 'placeholder'
    },
    {
      name: 'Tombouctou',
      rating: '4,3',
      type: 'Fast-food',
      price: '$$',
      deliveryTime: '40-50',
      distance: '2,4',
      imgName: 'placeholder'
    },
    {
      name: 'Barrio Latino',
      rating: '3,8',
      type: 'Fast-food',
      price: '$$',
      deliveryTime: '40-50',
      distance: '1,8',
      imgName: 'placeholder'
    },
    {
      name: 'Le Chat Noir',
      rating: '4,4',
      type: 'Fast-food',
      price: '$$',
      deliveryTime: '40-50',
      distance: '0,5',
      imgName: 'placeholder'
    },
    {
      name: 'L\'Tacos',
      rating: '4,3',
      type: 'Fast-food',
      price: '$$',
      deliveryTime: '40-50',
      distance: '0,3',
      imgName: 'placeholder'
    },
    {
      name: 'Signorizza',
      rating: '4,0',
      type: 'Fast-food',
      price: '$',
      deliveryTime: '40-50',
      distance: '2,5',
      imgName: 'placeholder'
    },
    {
      name: 'Bombay Street Food',
      rating: '3,6',
      type: 'Fast-food',
      price: '$$',
      deliveryTime: '40-50',
      distance: '0,9',
      imgName: 'placeholder'
    },
    {
      name: 'Sushi Shop',
      rating: '4,4',
      type: 'Fast-food',
      price: '$$$',
      deliveryTime: '40-50',
      distance: '1,1',
      imgName: 'placeholder'
    },
  ];

  ngOnInit() {
  }

}
