import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private apiUrl = 'http://99.81.59.175:9094/api/v1.0/wishlist';

  constructor(private http: HttpClient) {}

  getWishlistByUserId(userId: string): Observable<any> {
   
    const url = `${this.apiUrl}/getByUserId/${userId}`;
    return this.http.get(url);
  }

  addToWishlist(item: any): Observable<any> {
   
    const url = `${this.apiUrl}/addItem`;
    return this.http.post(url, item);
  }

  deleteFromWishlist(itemId: number): Observable<any> {
    
    const url = `${this.apiUrl}/delete/${itemId}`;
    return this.http.delete(url, );
  }

  updateWishlist(itemId: number, item: any): Observable<any> {
   
    const url = `${this.apiUrl}/update/${itemId}`;
    return this.http.put(url, item);
  }

  getAllItems(): Observable<any> {
    
    const url = `${this.apiUrl}/getAll`;
    return this.http.get(url, );
  }
}
