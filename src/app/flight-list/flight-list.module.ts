import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightListPageRoutingModule } from './flight-list-routing.module';

import { FlightListPage } from './flight-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightListPageRoutingModule
  ],
  declarations: [FlightListPage]
})
export class FlightListPageModule {}
