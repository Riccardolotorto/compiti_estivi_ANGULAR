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
      const headers = new HttpHeaders({Authorization: 
          'Bearer BQCzz31i6VkU7J2AwFolFnE26a4WF4VDFy-SC_szkf_trb1tw52AoDCaTQBtM0WY4EjsW--GzMYv4nP0cd3Ad1-q6ybz1DIAP36-0NBRX-r4NUOhphe-AyUdt-ery1FtcuH-nicsvdv4ea-gj-lC9L4_nYs0qk7WHU-iRo-X57tDObhIkmwHrsIcS4gElalZT9NFxik-6su9r0QuMSD3imFfJ9stLsOEBkNcE8prW_FZ2Wm2IHCkrdvCfkxe6vAugBVLSdqg_wBc7HJLojVfs4oeDQmAQZJcxIcT4wXPlyRWLnFAkauXPbx6lMrANg-lH1Uu4oSuDw'
      });

      let obsTracks = this.http.get(url, { headers });
      return obsTracks;
      //Ritorno un observable ai componenti che richiedono il servizio
    }
    getTrack(id: string) {
      const url = `https://api.spotify.com/v1/tracks/${id}`;
      const headers = new HttpHeaders({ Authorization:
          'Bearer BQCzz31i6VkU7J2AwFolFnE26a4WF4VDFy-SC_szkf_trb1tw52AoDCaTQBtM0WY4EjsW--GzMYv4nP0cd3Ad1-q6ybz1DIAP36-0NBRX-r4NUOhphe-AyUdt-ery1FtcuH-nicsvdv4ea-gj-lC9L4_nYs0qk7WHU-iRo-X57tDObhIkmwHrsIcS4gElalZT9NFxik-6su9r0QuMSD3imFfJ9stLsOEBkNcE8prW_FZ2Wm2IHCkrdvCfkxe6vAugBVLSdqg_wBc7HJLojVfs4oeDQmAQZJcxIcT4wXPlyRWLnFAkauXPbx6lMrANg-lH1Uu4oSuDw'
      });
      return this.http.get(url, { headers });
    }
    getArtist(id: string) {
      const url = `https://api.spotify.com/v1/artists/${id}`;
      const headers = new HttpHeaders({ Authorization:
          'Bearer BQCzz31i6VkU7J2AwFolFnE26a4WF4VDFy-SC_szkf_trb1tw52AoDCaTQBtM0WY4EjsW--GzMYv4nP0cd3Ad1-q6ybz1DIAP36-0NBRX-r4NUOhphe-AyUdt-ery1FtcuH-nicsvdv4ea-gj-lC9L4_nYs0qk7WHU-iRo-X57tDObhIkmwHrsIcS4gElalZT9NFxik-6su9r0QuMSD3imFfJ9stLsOEBkNcE8prW_FZ2Wm2IHCkrdvCfkxe6vAugBVLSdqg_wBc7HJLojVfs4oeDQmAQZJcxIcT4wXPlyRWLnFAkauXPbx6lMrANg-lH1Uu4oSuDw'
      });
      return this.http.get(url, { headers });
    }

}
