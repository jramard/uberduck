import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.page.html',
  styleUrls: ['./account-history.page.scss'],
})
export class AccountHistoryPage implements OnInit {

  constructor() { }

  productOrders = [
    {
      name: 'Classic',
      status: 'Livrée',
      price: '10,90',
      date: '15 janvier 2020',
      imgName: 'classic'
    },
    {
      name: 'Wallace',
      status: 'Livrée',
      price: '10,90',
      date: '23 décembre 2019',
      imgName: 'wallace'
    },
    {
      name: 'Nine',
      status: 'Livrée',
      price: '10,90',
      date: '18 décembre 2019',
      imgName: 'nine'
    },
    {
      name: 'Neruda',
      status: 'Livrée',
      price: '10,90',
      date: '5 décembre 2019',
      imgName: 'neruda'
    },
  ]

  delete(number) {
    this.productOrders.splice(number, 1);
  }

  ngOnInit() {
  }

}
