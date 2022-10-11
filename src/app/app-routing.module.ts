import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'auth', loadChildren: () => import('./pages/auth/auth.routing.module').then(a => a.AuthRoutingModule)},
  {path: 'playlist', loadChildren: () => import('./pages/playlist/playlist.routing.module').then(p => p.PlaylistRoutingModule)},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
