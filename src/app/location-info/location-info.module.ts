import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationInfoPageRoutingModule } from './location-info-routing.module';

import { LocationInfoPage } from './location-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationInfoPageRoutingModule
  ],
  declarations: [LocationInfoPage]
})
export class LocationInfoPageModule {}
