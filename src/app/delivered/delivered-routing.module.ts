import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveredPage } from './delivered.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveredPageRoutingModule {}
