import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  //creo il client http per fare le richieste al server
  constructor(private http: HttpClient) { }

  searchProduct(query: string, size: string) {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=${size}&json=true`;
      //const headers = new HttpHeaders({Authorization: environment.tokenn});
      return this.http.get(url);
      //Ritorno un observable ai componenti che richiedono il servizio
  }
  getProduct(id: string) {
      const url = `https://world.openfoodfacts.org/api/v0/product/${id}`;
      return this.http.get(url);
  }
}
