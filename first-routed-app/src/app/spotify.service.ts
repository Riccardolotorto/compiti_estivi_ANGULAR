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
          'Bearer BQBroseB4HO35nV6R-0PsvXeewwFHAX45tCDzZ2LPIenZpLIYLmlQPfIH6dgN2cXqFgsYTZxhIUe_BZr_W82GCZxdV-ATnZ6ri3MtgOkT7-Mcl14kBYOdMuyKxA0GbAvJmK_QExdGi8-bYSUJDaWawcIcwN4VmJ6RFSViVdVsYSub6uKVpcTS-wIR28-xVISuhT-9TBMyqVo-lPWEufiWQwbNdl_vT8ceBCKPgxlDNv23nCtgi63_uE_Oe6Mhh-Lj1vqVwJiwbUhvJoF_N1bek5l1qAl8up3eDgCgI6-vzZ1qkamV-mRZxdvdRdvT9tWR2HI2bKdFw'
      });

      let obsTracks = this.http.get(url, { headers });
      return obsTracks;
  //Ritorno un observable ai componenti che richiedono il servizio
    }

}
