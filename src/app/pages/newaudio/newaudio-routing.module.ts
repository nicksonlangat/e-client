import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewaudioPage } from './newaudio.page';

const routes: Routes = [
  {
    path: '',
    component: NewaudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewaudioPageRoutingModule {}
