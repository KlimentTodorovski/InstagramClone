import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { HomePageRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [ HomePageRoutingModule.components ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CoreModule,
    FormsModule
  ]
})

export class UsersModule { }
