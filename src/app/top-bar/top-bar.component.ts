import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  providers: [AppService]
})
export class TopBarComponent implements OnInit {
  counter: number;
  counterItems: number;
  shoppingCartItems;
  visibilityCart = false;
  isReady = false;
  faBars = faBars;

  constructor(private appSvc: AppService) {
  }

  ngOnInit() {
    this.appSvc.loadCartContent().subscribe((res) => {
      this.shoppingCartItems = res;
      this.counterItems = this.shoppingCartItems.shopping_cart_items.length;

      if (this.counterItems) {
        this.counter = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.shoppingCartItems.shopping_cart_items.length; i++) {
          this.counter = this.counter + (1 * this.shoppingCartItems.shopping_cart_items[i].count);
        }
      } else {
        this.counter = 0;
      }
      this.isReady = true;
    });
  }

  togglevisibilityCart() {
    this.visibilityCart = !this.visibilityCart;
  }

  togglevisibilityCounter() {
    this.visibilityCart = !this.visibilityCart;
  }

  setCounter(event) {
    this.counter = event;
  }
}
