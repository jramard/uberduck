import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveredPageRoutingModule } from './delivered-routing.module';

import { DeliveredPage } from './delivered.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveredPageRoutingModule
  ],
  declarations: [DeliveredPage]
})
export class DeliveredPageModule {}
