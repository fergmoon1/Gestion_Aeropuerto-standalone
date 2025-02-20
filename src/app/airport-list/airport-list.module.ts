import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirportListPageRoutingModule } from './airport-list-routing.module';

import { AirportListPage } from './airport-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirportListPageRoutingModule
  ],
  declarations: [AirportListPage]
})
export class AirportListPageModule {}
