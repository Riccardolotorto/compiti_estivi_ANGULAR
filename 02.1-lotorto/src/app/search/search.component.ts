import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query!: string;
  size!: string;
  obsProduct!: Observable<Object>;
  results: any;
  //inietto il food service 
  constructor(public food: FoodService) {}
  submit(query: HTMLInputElement, size: HTMLInputElement): void {
    if (!query.value && !size.value) {
      return;
    }
    this.query = query.value;
    this.size = size.value;
    this.obsProduct = this.food.searchProduct(this.query, this.size);
    this.obsProduct.subscribe((data) => { this.results = data; console.log(this.results) });
  }
  renderResults(res: any): void {
    this.results = null;
    if (res && res.products && res.products.items) {
      this.results = res.products.items;
    }
  }
}
