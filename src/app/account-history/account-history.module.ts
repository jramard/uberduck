import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountHistoryPageRoutingModule } from './account-history-routing.module';

import { AccountHistoryPage } from './account-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountHistoryPageRoutingModule
  ],
  declarations: [AccountHistoryPage]
})
export class AccountHistoryPageModule {}
