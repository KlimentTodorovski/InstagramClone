import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { PhotoEditComponent } from './edit/photo-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoComponent,
    children: [
      { path: 'edit', component: PhotoEditComponent }
    ]
   }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class PhotoRoutingModule {
  static components = [ PhotoComponent, PhotoEditComponent ];
}
