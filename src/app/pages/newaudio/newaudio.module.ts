import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewaudioPageRoutingModule } from './newaudio-routing.module';

import { NewaudioPage } from './newaudio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewaudioPageRoutingModule
  ],
  declarations: [NewaudioPage]
})
export class NewaudioPageModule {}
