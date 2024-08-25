import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(public http: HttpClient) { }

  //questo metodo fa una ricerca sull'api in base alla query e alla size ricevuta (in questo caso sarà dall'utente)
  searchProduct(query: string, size: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=${size}&json=true`;
    return this.http.get(url);
  }
  getProduct(id: string) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}`;
    return this.http.get(url); 
  }
}
