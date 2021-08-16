import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewbookPage } from './newbook.page';

const routes: Routes = [
  {
    path: '',
    component: NewbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewbookPageRoutingModule {}
