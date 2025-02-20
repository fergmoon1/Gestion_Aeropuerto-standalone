import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnicalStopListPageRoutingModule } from './technical-stop-list-routing.module';

import { TechnicalStopListPage } from './technical-stop-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnicalStopListPageRoutingModule
  ],
  declarations: [TechnicalStopListPage]
})
export class TechnicalStopListPageModule {}
