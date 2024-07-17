import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title = 'first-routed-app';
  obsTrack : Observable<Object>;

  // faccio iniettare lo spotify service e faccio una ricerca

  constructor(public spotify : SpotifyService){
    this.obsTrack = spotify.searchTrack("Take 4");
    this.obsTrack.subscribe((data)=>console.log(data)); //visualizzo la ricerca sulla console
  }*/
  query !: string;
  title = 'first-routed-app';
  obsTrack !: Observable<Object>;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public spotify: SpotifyService) {
    
  }
  //il metodo submit serve per poter fare una ricerca di una canzone attraverso un input nella pagina html
  submit(query:HTMLInputElement): void {
      if (!query.value) {
        return;
      }
      this.query = query.value;
      this.obsTrack = this.spotify.searchTrack(this.query);  //l'obs richiama il metodo searchTrack dello spotify service
      this.obsTrack.subscribe((data) => this.results = data); 
  }
  
}
