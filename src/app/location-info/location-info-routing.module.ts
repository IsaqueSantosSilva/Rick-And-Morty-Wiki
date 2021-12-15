import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationInfoPage } from './location-info.page';

const routes: Routes = [
  {
    path: '',
    component: LocationInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationInfoPageRoutingModule {}
