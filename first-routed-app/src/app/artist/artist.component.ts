import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  routeArtObs !: Observable<ParamMap>;
  artist : any;
  spotifyServiceArtObs !: Observable<Object>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: SpotifyService,
              private location: Location) {}
  
  ngOnInit(): void {
      this.routeArtObs = this.route.paramMap;
      this.routeArtObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) => {
      let artistId = params.get('id');
      console.log(artistId);
      this.spotifyServiceArtObs = this.service.getArtist(String(artistId));
      this.spotifyServiceArtObs.subscribe((data)=> this.artist = data);
  }
  back() {
    this.location.back();
  }
}
