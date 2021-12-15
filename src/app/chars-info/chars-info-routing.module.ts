import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharsInfoPage } from './chars-info.page';

const routes: Routes = [
  {
    path: '',
    component: CharsInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharsInfoPageRoutingModule {}
