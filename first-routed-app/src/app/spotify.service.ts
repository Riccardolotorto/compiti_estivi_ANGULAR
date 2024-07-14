import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      const headers = new HttpHeaders({
        Authorization:
          'Bearer BQBXHvNwQ53sbwd2vBWyth7jopIsJS9V4yLWY-8CeLKu_xWcLrmlMpS3TqGTo4w2noZDm2g-sI2ZulzE8WOU1mEB4PUDQhgh8G31i1Vv5s_ON0c6zS7EMtJYcQJ11wGwXGHOsSo0jqQz3xFCKxxmRZwNtW-3IHFCTo4aC_iyVdm6JF4MpGaryfezwlyC5MGn9OC_4jVcmm1CzCcSoRDqCs-0GQr9Uh2_Tm3T7fpmspFYp-WZ-0E1JsilxpC28E6EshxH7evaS9fVjld_RU76njjftd1LtexcFIwNy8GIvSPYDC_-CHj6PT0GaWFjJ71Q1kz588e2JA'
      });

      let obsTracks = this.http.get(url, { headers });
      return obsTracks;
  //Ritorno un observable ai componenti che richiedono il servizio
    }

}
