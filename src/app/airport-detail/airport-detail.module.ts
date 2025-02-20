import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirportDetailPageRoutingModule } from './airport-detail-routing.module';

import { AirportDetailPage } from './airport-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirportDetailPageRoutingModule
  ],
  declarations: [AirportDetailPage]
})
export class AirportDetailPageModule {}
