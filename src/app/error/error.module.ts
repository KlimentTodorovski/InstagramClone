import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error-routing.module';



@NgModule({
  declarations: [ ErrorRoutingModule.components ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})

export class ErrorModule { }
