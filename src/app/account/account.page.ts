import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  email: string;

  constructor(public afAuth: AngularFireAuth) {
    this.email = afAuth.auth.currentUser.email;
  }

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
      name: 'Déconnexion',
      imgName: 'logout',
      linkName: 'connection'
    }
  ];

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
