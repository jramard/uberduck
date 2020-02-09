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
      linkName: 'accountInfo'
    },
    {
      name: 'Mes moyens de paiement',
      imgName: 'wallet',
      linkName: 'accountPayment'
    },
    {
      name: 'Historique des achats',
      imgName: 'shopping-bag',
      linkName: 'accountHistory'
    },
    {
      name: 'Mes informations',
      imgName: 'logout',
      linkName: 'accountLogout'
    }
  ];

  ngOnInit() {
  }

}
