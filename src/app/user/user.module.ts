import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [ UserRoutingModule.components ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule
  ]
})

export class UserModule { }
