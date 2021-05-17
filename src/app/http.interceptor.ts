import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import * as data from './mockedData/shopping_cart_items.json';

const CART_URL = 'http://localhost:3000/shoppingCartItems';


@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url === CART_URL) {
      return of(new HttpResponse({status: 200, body: ((data) as any).default}));
    }
    return next.handle(request);

  }
}
