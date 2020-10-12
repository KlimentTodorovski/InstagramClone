import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'albums', loadChildren: () => import('../albums/albums.module').then(m => m.AlbumsModule) },
      { path: 'albums/:albumId', loadChildren: () => import('../album/album.module').then(m => m.AlbumModule) }
    ],
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {
  static components = [ UserComponent ];
}
