import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

//inietto il servizio a tutti i componenti
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
    //url per oauth: https://developer.spotify.com/console/get-search-item/
    //Ottengo il modulo HttpClient
    constructor(private http: HttpClient) { }

    searchTrack(query: string) {
      const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
      const headers = new HttpHeaders({Authorization: environment.tokenn});
      let obsTracks = this.http.get(url, { headers });
      return obsTracks;
      //Ritorno un observable ai componenti che richiedono il servizio
    }
    getTrack(id: string) {
      const url = `https://api.spotify.com/v1/tracks/${id}`;
      const headers = new HttpHeaders({ Authorization: environment.tokenn});
      return this.http.get(url, { headers });
    }
    getArtist(id: string) {
      const url = `https://api.spotify.com/v1/artists/${id}`;
      const headers = new HttpHeaders({ Authorization: environment.tokenn});
      return this.http.get(url, { headers });
    }
    getAlbum(id: string) {
      const url = `https://api.spotify.com/v1/albums/${id}`;
      const headers = new HttpHeaders({ Authorization: environment.tokenn});
      return this.http.get(url, { headers });
    }

}
