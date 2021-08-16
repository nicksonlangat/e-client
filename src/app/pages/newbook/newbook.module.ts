import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NewbookPageRoutingModule } from './newbook-routing.module';

import { NewbookPage } from './newbook.page';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewbookPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  declarations: [NewbookPage]
})
export class NewbookPageModule {}
