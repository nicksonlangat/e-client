import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewlinkPageRoutingModule } from './newlink-routing.module';

import { NewlinkPage } from './newlink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewlinkPageRoutingModule
  ],
  declarations: [NewlinkPage]
})
export class NewlinkPageModule {}
