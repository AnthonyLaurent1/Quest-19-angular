import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlaylistListComponent} from "./playlist-list/playlist-list.component";
import {PlaylistCreateComponent} from "./playlist-create/playlist-create.component";
import {PlaylistDetailsComponent} from "./playlist-details/playlist-details.component";

const routes: Routes = [
  {path: 'playlist', component: PlaylistListComponent, children: [
      {path: 'create', component: PlaylistCreateComponent},
      {path: 'details', component: PlaylistDetailsComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
