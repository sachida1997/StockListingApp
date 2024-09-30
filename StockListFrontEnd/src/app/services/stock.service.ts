// stock.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockresponse } from '../_models/stockresponse';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = 'http://99.81.59.175:9093/api/v1.0/stocks';

  constructor(private http: HttpClient) {}

  getStocksByCountry(country: string): Observable<any> {
   

    return this.http.get(`${this.apiUrl}/country/${country}` );
  }
  
  searchStock(keyword: string): Observable<Stockresponse> {
    const url = `${this.apiUrl}/search?q=${keyword}`;
    return this.http.get<Stockresponse>(url);
  }

}

 
