import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from './services/data.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    LoadingSpinnerComponent
  ],
  providers: [ DataService ],
  entryComponents: [ ConfirmDialogComponent ]
})

export class CoreModule { }
