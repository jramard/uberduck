import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
// import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public categories: any;
  public favorites: any;

  constructor(public afDB: AngularFireDatabase) {
    this.afDB.list('/categories').valueChanges().subscribe((data) => {
      this.categories = data;
    });
    this.afDB.list('/favoriteStores').valueChanges().subscribe((data) => {
      this.favorites = data;
    });
  }

  // categories = [
  //   {
  //     name: 'Tous',
  //     imgName: 'folder'
  //   },
  //   {
  //     name: 'Fast-food',
  //     imgName: 'burger'
  //   },
  //   {
  //     name: 'Cadeaux',
  //     imgName: 'gifts'
  //   },
  //   {
  //     name: 'Apero',
  //     imgName: 'cocktail'
  //   },
  //   {
  //     name: 'Pharmacie',
  //     imgName: 'medicine'
  //   },
  //   {
  //     name: 'Courses',
  //     imgName: 'shopping-cart'
  //   },
  //   {
  //     name: 'Sport',
  //     imgName: 'soccer-ball-variant'
  //   },
  //   {
  //     name: 'Tech',
  //     imgName: 'monitor'
  //   },
  //   {
  //     name: 'Jeux',
  //     imgName: 'console'
  //   },
  // ];

  // favorites = [
  //   {
  //     name: 'Rosaparks',
  //     rating: '4,7',
  //     type: 'fast-food',
  //     price: '$$',
  //     deliveryTime: '20-30',
  //     distance: '0,8',
  //     imgName: 'rosaparks'
  //   },
  //   {
  //     name: 'Fnac',
  //     rating: '4,3',
  //     type: 'Cadeaux',
  //     price: '$$',
  //     deliveryTime: '10-15',
  //     distance: '0,3',
  //     imgName: 'fnac'
  //   },
  //   {
  //     name: 'LDLC',
  //     rating: '4,5',
  //     type: 'Tech',
  //     price: '$$$',
  //     deliveryTime: '45-60',
  //     distance: '7,0',
  //     imgName: 'ldlc'
  //   },
  //   {
  //     name: 'Nike',
  //     rating: '4,1',
  //     type: 'Sport',
  //     price: '$$',
  //     deliveryTime: '30-45',
  //     distance: '3,2',
  //     imgName: 'nike'
  //   },
  //   {
  //     name: 'Micromania',
  //     rating: '3,7',
  //     type: 'Jeux',
  //     price: '$$$',
  //     deliveryTime: '30-45',
  //     distance: '1,4',
  //     imgName: 'micromania'
  //   },
  //   {
  //     name: 'Super U',
  //     rating: '4,3',
  //     type: 'Courses',
  //     price: '$$',
  //     deliveryTime: '20-30',
  //     distance: '4,3',
  //     imgName: 'superU'
  //   }
  // ]

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
