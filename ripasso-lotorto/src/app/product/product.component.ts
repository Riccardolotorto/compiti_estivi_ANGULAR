import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  product: any;
  obsFood!: Observable<Object>;
  routeObs!: Observable<ParamMap>;

  constructor(public food: FoodService,
              private route: ActivatedRoute,
              private location: Location
  ) {}

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let productId = params.get('id');
    this.obsFood = this.food.getProduct(String(productId));
    this.obsFood.subscribe((data) => this.product = data);
  }

  back() {
    this.location.back();
  }
}
