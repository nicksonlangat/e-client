import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewlinkPage } from './newlink.page';

const routes: Routes = [
  {
    path: '',
    component: NewlinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewlinkPageRoutingModule {}
