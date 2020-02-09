import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor() { }

  user = {
    firstName: 'Julien',
    lastName: 'Ramard',
    email: 'julien.ramard@gmail.com',
    balance: '28,15',
    imgName: 'user'
  };

  parameters = [
    {
      name: 'Mes informations',
      imgName: 'user-card',
      linkName: 'account-info'
    },
    {
      name: 'Mes moyens de paiement',
      imgName: 'wallet',
      linkName: 'account-payment'
    },
    {
      name: 'Historique des achats',
      imgName: 'shopping-bag',
      linkName: 'account-history'
    },
    {
      name: 'Mes informations',
      imgName: 'logout',
      linkName: 'account-logout'
    }
  ];

  ngOnInit() {
  }

}
