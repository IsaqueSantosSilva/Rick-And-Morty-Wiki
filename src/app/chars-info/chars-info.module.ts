import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharsInfoPageRoutingModule } from './chars-info-routing.module';

import { CharsInfoPage } from './chars-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharsInfoPageRoutingModule
  ],
  declarations: [CharsInfoPage]
})
export class CharsInfoPageModule {}
