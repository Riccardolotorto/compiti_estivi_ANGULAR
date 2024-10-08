import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    TrackComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
