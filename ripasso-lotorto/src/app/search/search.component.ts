import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  results: any;
  query!: string;
  size!: string;
  obsFood !: Observable<Object>;

  constructor(public food: FoodService) {}

  submit(query: HTMLInputElement, size: HTMLInputElement) {
    if (!query.value || !size.value) {
      return
    }
    this.query = query.value;
    this.size = size.value;
    this.obsFood = this.food.searchFood(this.query, this.size);
    this.obsFood.subscribe((data) => {this.results = data; console.log(this.results)});
  }
}
