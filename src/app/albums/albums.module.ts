import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsRoutingModule } from './albums-routing.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [ AlbumsRoutingModule.components ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    CoreModule
  ]
})
export class AlbumsModule { }
