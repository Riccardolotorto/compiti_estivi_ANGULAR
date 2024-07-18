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
          'Bearer BQDhJAp6uUh9rIWs5WBZfCI7VUn0OtDdTvdtIOvqn5OCNAuL-RIZIP62flIodJdRX1TsS8zcGqFeOL3B5Ipx9a78_M2tuJR5wZN1oSkgwDdXYPhvoKZT4BoSyNgPiQHawbAGVd4bIfFQ5tBbxLlNXRFUptIsl8Br9FpaI2vLL6WMpuc8nP3rtb_hl_7mdP_gHOH0P6eUNBF69nvltr0bYhEvYY6tP7P56hFyzPE3Os-3TGfes_9hPpRpAha9Y5lcjJLGK8bCujlIbBIgZ4HAYd7Xst8t1qo4wN5ayemkDV5n16VD_NEELsuweky1G41DY7UF1bmv4Q'
      });

      let obsTracks = this.http.get(url, { headers });
      return obsTracks;
  //Ritorno un observable ai componenti che richiedono il servizio
    }
    getTrack(id: string) {
      const url = `https://api.spotify.com/v1/tracks/${id}`;
      const headers = new HttpHeaders({
        Authorization:
          'Bearer BQDhJAp6uUh9rIWs5WBZfCI7VUn0OtDdTvdtIOvqn5OCNAuL-RIZIP62flIodJdRX1TsS8zcGqFeOL3B5Ipx9a78_M2tuJR5wZN1oSkgwDdXYPhvoKZT4BoSyNgPiQHawbAGVd4bIfFQ5tBbxLlNXRFUptIsl8Br9FpaI2vLL6WMpuc8nP3rtb_hl_7mdP_gHOH0P6eUNBF69nvltr0bYhEvYY6tP7P56hFyzPE3Os-3TGfes_9hPpRpAha9Y5lcjJLGK8bCujlIbBIgZ4HAYd7Xst8t1qo4wN5ayemkDV5n16VD_NEELsuweky1G41DY7UF1bmv4Q'
      });
      
      return this.http.get(url, { headers });
    }

}
