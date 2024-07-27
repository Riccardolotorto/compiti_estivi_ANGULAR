import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  routePrObs !: Observable<ParamMap>;
  product : any;
  spotifyServicePrObs !: Observable<Object>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: FoodService,
              private location: Location) {}
  
  ngOnInit(): void {
      this.routePrObs = this.route.paramMap;
      this.routePrObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) => {
      let prId = params.get('id');
      console.log(prId);
      this.spotifyServicePrObs = this.service.getProduct(String(prId));
      this.spotifyServicePrObs.subscribe((data)=> this.product = data);
  }
}
