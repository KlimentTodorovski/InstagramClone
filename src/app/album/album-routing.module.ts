import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumComponent,
    children: [
      { path: 'photos', loadChildren: () => import('../photos/photos.module').then(m => m.PhotosModule) },
      { path: 'photos/:photoId', loadChildren: () => import('../photo/photo.module').then(m => m.PhotoModule) }
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

export class AlbumRoutingModule {
  static components = [ AlbumComponent ];
}
