import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  product: any;
  obsProduct!: Observable<ParamMap>;
  obsFoodService!: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private food: FoodService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.obsProduct = this.route.paramMap;  //memorizza i parametri dell'url (in questo caso l'id del prodotto)
    this.obsProduct.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) => {
    let prId = params.get('id');
    console.log(prId);
    this.obsFoodService = this.food.getProduct(String(prId));   //cerca il prodotto specifico in base all'id
    this.obsFoodService.subscribe((data)=> this.product = data);
  }
  back() {
    this.location.back()
  }
}
