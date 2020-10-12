import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    children: [
      { path: '0/edit', component: AddPhotoComponent },
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class PhotosRoutingModule {
  static components = [ PhotosComponent, AddPhotoComponent ];
}
