import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnicalStopListPage } from './technical-stop-list.page';

const routes: Routes = [
  {
    path: '',
    component: TechnicalStopListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicalStopListPageRoutingModule {}
