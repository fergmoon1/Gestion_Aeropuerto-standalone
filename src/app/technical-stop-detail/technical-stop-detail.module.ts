import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnicalStopDetailPageRoutingModule } from './technical-stop-detail-routing.module';

import { TechnicalStopDetailPage } from './technical-stop-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnicalStopDetailPageRoutingModule
  ],
  declarations: [TechnicalStopDetailPage]
})
export class TechnicalStopDetailPageModule {}
