import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistCreateComponent } from './playlist-create/playlist-create.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    PlaylistCreateComponent,
    PlaylistListComponent,
    PlaylistDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PlaylistModule { }
