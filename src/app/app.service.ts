import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const CART_URL = 'http://localhost:3000/shoppingCartItems';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  loadCartContent(): Observable<any> {
    return this.http.get(CART_URL);
  }
}
