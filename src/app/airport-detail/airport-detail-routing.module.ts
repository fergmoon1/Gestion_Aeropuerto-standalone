import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirportDetailPage } from './airport-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AirportDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirportDetailPageRoutingModule {}
