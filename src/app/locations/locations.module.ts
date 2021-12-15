import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationsPageRoutingModule } from './locations-routing.module';

import { LocationsPage } from './locations.page';
import { HttpClientModule } from "@angular/common/http";
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationsPageRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  declarations: [LocationsPage]
})
export class LocationsPageModule {}
