import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumRoutingModule } from '../album/album-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AlbumRoutingModule.components ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    ReactiveFormsModule
  ]
})

export class AlbumModule { }
