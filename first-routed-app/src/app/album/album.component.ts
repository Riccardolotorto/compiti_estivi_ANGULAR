import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
    routeAlbObs !: Observable<ParamMap>;
    album : any;
    spotifyServiceAlbObs !: Observable<Object>;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: SpotifyService,
                private location: Location) {}
    
    ngOnInit(): void {
        this.routeAlbObs = this.route.paramMap;
        this.routeAlbObs.subscribe(this.getRouterParam);
    }
    getRouterParam = (params: ParamMap) => {
        let albumId = params.get('id');
        console.log(albumId);
        this.spotifyServiceAlbObs = this.service.getAlbum(String(albumId));
        this.spotifyServiceAlbObs.subscribe((data)=> this.album = data);
    }
    back() {
      this.location.back();
    }
}
