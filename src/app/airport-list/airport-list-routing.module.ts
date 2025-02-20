import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirportListPage } from './airport-list.page';

const routes: Routes = [
  {
    path: '',
    component: AirportListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirportListPageRoutingModule {}
