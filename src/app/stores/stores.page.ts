import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {
  public stores: any;

  constructor(public afDB: AngularFireDatabase) {
    this.afDB.list('/fast-foods').valueChanges().subscribe((data) => {
      this.stores = data;
    });
  }

  // stores = [
  //   {
  //     name: 'Rosaparks',
  //     rating: '4,3',
  //     type: 'Fast-food',
  //     price: '$$',
  //     deliveryTime: '40-50',
  //     distance: '2,4',
  //     imgName: 'rosaparks'
  //   },
  //   {
  //     name: 'O\'Tacos',
  //     rating: '4,1',
  //     type: 'Fast-food',
  //     price: '$$$',
  //     deliveryTime: '40-50',
  //     distance: '1,2',
  //     imgName: 'otacos'
  //   },
  //   {
  //     name: 'Little Korea',
  //     rating: '4,5',
  //     type: 'Fast-food',
  //     price: '$$$',
  //     deliveryTime: '40-50',
  //     distance: '1,7',
  //     imgName: 'littleKorea'
  //   },
  //   {
  //     name: 'Tombouctou',
  //     rating: '4,3',
  //     type: 'Fast-food',
  //     price: '$$',
  //     deliveryTime: '40-50',
  //     distance: '2,4',
  //     imgName: 'tombouctou'
  //   },
  //   {
  //     name: 'Barrio Latino',
  //     rating: '3,8',
  //     type: 'Fast-food',
  //     price: '$$',
  //     deliveryTime: '40-50',
  //     distance: '1,8',
  //     imgName: 'barrioLatino'
  //   },
  //   {
  //     name: 'Le Chat Noir',
  //     rating: '4,4',
  //     type: 'Fast-food',
  //     price: '$$',
  //     deliveryTime: '40-50',
  //     distance: '0,5',
  //     imgName: 'leChatNoir'
  //   },
  //   {
  //     name: 'L\'Tacos',
  //     rating: '4,3',
  //     type: 'Fast-food',
  //     price: '$$',
  //     deliveryTime: '40-50',
  //     distance: '0,3',
  //     imgName: 'ltacos'
  //   },
  //   {
  //     name: 'Signorizza',
  //     rating: '4,0',
  //     type: 'Fast-food',
  //     price: '$',
  //     deliveryTime: '40-50',
  //     distance: '2,5',
  //     imgName: 'signorizza'
  //   },
  //   {
  //     name: 'Bombay Street Food',
  //     rating: '3,6',
  //     type: 'Fast-food',
  //     price: '$$',
  //     deliveryTime: '40-50',
  //     distance: '0,9',
  //     imgName: 'bombayStreetFood'
  //   },
  //   {
  //     name: 'Sushi Shop',
  //     rating: '4,4',
  //     type: 'Fast-food',
  //     price: '$$$',
  //     deliveryTime: '40-50',
  //     distance: '1,1',
  //     imgName: 'sushiShop'
  //   },
  // ];

  ngOnInit() {
  }

}
