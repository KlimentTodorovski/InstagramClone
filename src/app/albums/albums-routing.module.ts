import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums.component';

const routes: Routes = [
  { path: '', component: AlbumsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class AlbumsRoutingModule {
  static components = [ AlbumsComponent ];
}
