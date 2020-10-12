import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoRoutingModule } from './photo-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [ PhotoRoutingModule.components ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})

export class PhotoModule { }
