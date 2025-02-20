import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnicalStopDetailPage } from './technical-stop-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TechnicalStopDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicalStopDetailPageRoutingModule {}
