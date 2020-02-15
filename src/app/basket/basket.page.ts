import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  constructor() { }

  basketItems = [
    {
      name: 'Classic',
      price: 10.90,
      quantity: 1,
      imgName: 'classic'
    },
    {
      name: 'Wallace',
      price: 10.90,
      quantity: 1,
      imgName: 'wallace'
    },
    {
      name: 'Neruda',
      price: 10.90,
      quantity: 1,
      imgName: 'neruda'
    },
  ];

  delete(number) {
    this.basketItems.splice(number, 1);
  }

  getTotal() {
    let total = 0;
    for (let i = 0; i < this.basketItems.length; i++) {
      const item = this.basketItems[i];
      total += (item.price * item.quantity);
    }
    return total;
  }

  ngOnInit() {
  }

}
