import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'applicazioneEstivaProva';
  obsTrack : Observable<Object>;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public spotify : SpotifyService){
    this.obsTrack = spotify.searchTrack("first day out");
    this.obsTrack.subscribe((data)=>console.log(data)); //visualizzo la ricerca sulla console
  } 
}
