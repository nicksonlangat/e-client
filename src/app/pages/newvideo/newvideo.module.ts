import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewvideoPageRoutingModule } from './newvideo-routing.module';

import { NewvideoPage } from './newvideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewvideoPageRoutingModule
  ],
  declarations: [NewvideoPage]
})
export class NewvideoPageModule {}
