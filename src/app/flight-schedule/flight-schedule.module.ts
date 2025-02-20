import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightSchedulePageRoutingModule } from './flight-schedule-routing.module';

import { FlightSchedulePage } from './flight-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightSchedulePageRoutingModule
  ],
  declarations: [FlightSchedulePage]
})
export class FlightSchedulePageModule {}
