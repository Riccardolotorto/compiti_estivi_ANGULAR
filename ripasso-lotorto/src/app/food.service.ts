import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  searchFood(query: string, size: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=${size}&json=true`;
    return this.http.get(url);
  }

  getProduct(id: string) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}`;
    return this.http.get(url);
  }
}
