import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  name: string;
  rating: string;
  type: string;
  price: string;
  deliveryTime: string;
  distance: string;
  imgName: string;
  products: [];

  constructor(public afDB: AngularFireDatabase) {
    this.afDB.list('/fast-foods').valueChanges().subscribe((data: any) => {
      this.name = data[0].name;
      this.rating = data[0].rating;
      this.type = data[0].type;
      this.price = data[0].price;
      this.deliveryTime = data[0].deliveryTime;
      this.distance = data[0].distance;
      this.imgName = data[0].imgName;
      this.products = data[0].products;
    });
  }

  categories = [
    'Populaire',
    'Burgers',
    'Sandwitches',
    'Salades',
    'Desserts',
    'Boissons',
    'Autres'
  ];

  activeCategory = 'Burgers';

  basketItems = [
    // {
    //   name: 'Classic',
    //   price: 10.90,
    //   quantity: 1,
    //   imgName: 'classic'
    // },
    // {
    //   name: 'Wallace',
    //   price: 10.90,
    //   quantity: 1,
    //   imgName: 'wallace'
    // },
    // {
    //   name: 'Neruda',
    //   price: 10.90,
    //   quantity: 1,
    //   imgName: 'neruda'
    // },
  ];

  showBasket = false;

  addToBasket(item) {
    this.showBasket = true;
    this.basketItems.push(this.products[item]);
  };

  // store = {
  //   name: 'Rosaparks',
  //   rating: '4,7',
  //   type: 'fast-food',
  //   price: '$$',
  //   deliveryTime: '20-30',
  //   distance: '0,8',
  //   imgName: 'rosaparks',
  //   products: [
  //     {
  //       name: 'Classic',
  //       description: 'Bœuf bio ● comté affiné 18 mois ● laitue iceberg ● cornichons ● oignons caramélisés ● sauce signature',
  //       price: 10.90,
  //       imgName: 'classic'
  //     },
  //     {
  //       name: 'Wallace',
  //       description: 'Bœuf bio ● comté affiné 18 mois ● laitue iceberg ● cornichons ● oignons caramélisés ● sauce signature',
  //       price: 10.90,
  //       imgName: 'wallace'
  //     },
  //     {
  //       name: 'Neruda',
  //       description: 'Bœuf bio ● comté affiné 18 mois ● laitue iceberg ● cornichons ● oignons caramélisés ● sauce signature',
  //       price: 10.90,
  //       imgName: 'neruda'
  //     },
  //     {
  //       name: 'Nine',
  //       description: 'Bœuf bio ● comté affiné 18 mois ● laitue iceberg ● cornichons ● oignons caramélisés ● sauce signature',
  //       price: 10.90,
  //       imgName: 'nine'
  //     },
  //     {
  //       name: 'Gassan',
  //       description: 'Bœuf bio ● comté affiné 18 mois ● laitue iceberg ● cornichons ● oignons caramélisés ● sauce signature',
  //       price: 10.90,
  //       imgName: 'gassan'
  //     },
  //     {
  //       name: 'Protest',
  //       description: 'Bœuf bio ● comté affiné 18 mois ● laitue iceberg ● cornichons ● oignons caramélisés ● sauce signature',
  //       price: 10.90,
  //       imgName: 'protest'
  //     },
  //     {
  //       name: 'Luther',
  //       description: 'Bœuf bio ● comté affiné 18 mois ● laitue iceberg ● cornichons ● oignons caramélisés ● sauce signature',
  //       price: 10.90,
  //       imgName: 'luther'
  //     },
  //     {
  //       name: 'Little',
  //       description: 'Bœuf bio ● comté affiné 18 mois ● laitue iceberg ● cornichons ● oignons caramélisés ● sauce signature',
  //       price: 9.90,
  //       imgName: 'little'
  //     },
  //     {
  //       name: 'Rosa',
  //       description: 'Bœuf bio ● comté affiné 18 mois ● laitue iceberg ● cornichons ● oignons caramélisés ● sauce signature',
  //       price: 9.90,
  //       imgName: 'rosa'
  //     }
  //   ]
  // };

  slideOpts = {
    spaceBetween: 15,
    slidesPerView: 'auto',
  };

  ngOnInit() {
  }

}
