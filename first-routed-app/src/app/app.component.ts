import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-routed-app';
  /*obsTrack : Observable<Object>;

  // faccio iniettare lo spotify service e faccio una ricerca

  constructor(public spotify : SpotifyService){
    this.obsTrack = spotify.searchTrack("Take 4");
    this.obsTrack.subscribe((data)=>console.log(data)); //visualizzo la ricerca sulla console
  }*/

}
