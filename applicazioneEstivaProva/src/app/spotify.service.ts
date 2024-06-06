import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=first day out&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBaKG5pFi9cOuoG1fzofQ8kDbdjkuI31YM3FrwbJF7oAltNWcwRrEscvko1lSN_JBbR8Bv3t3UBb2r5VQ6Qo7A8rfNTpCKJwF58riK_bZ3tkdZvkRndK5E81PdeYPHdeJSEn-fMHC955DMktN21huBgpXP-u11ImoatELxNUuTqu6CSKt0Is7TGe_Zucwpv58dJSJ1hDh8yakrccYDw-gLQBXoVGAQuNO_3lZQTp6woHTBZesl1QWhfI43K5eYxvpgP9YcApgIZhLpu809rOTQrbav1wjlZpdRPfb_O-XgLKcBAs4KB8sr83TD9yRV7vB1jgvCcyQ'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  //Ritorno un observable ai componenti che richiedono il servizio
  }
}