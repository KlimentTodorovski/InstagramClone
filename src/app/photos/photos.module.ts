import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRoutingModule } from './photos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [ PhotosRoutingModule.components ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})

export class PhotosModule { }
