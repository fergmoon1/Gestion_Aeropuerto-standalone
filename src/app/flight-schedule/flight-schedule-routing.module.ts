import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightSchedulePage } from './flight-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: FlightSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightSchedulePageRoutingModule {}
