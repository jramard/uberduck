import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountHistoryPage } from './account-history.page';

const routes: Routes = [
  {
    path: '',
    component: AccountHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountHistoryPageRoutingModule {}
