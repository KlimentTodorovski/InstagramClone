import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/users' },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: 'users/:userId', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/users' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
