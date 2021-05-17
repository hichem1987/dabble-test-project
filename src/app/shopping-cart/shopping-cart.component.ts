import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() counter;
  @Input() shoppingCartItems;
  @Output() counterElement: EventEmitter<any> = new EventEmitter();
  showAlert: boolean;
  totalPrice: number;
  counterItems: number;

  constructor() {
  }

  ngOnInit() {
    this.calculateTotalCounter();
  }

// cart operations functions
  calculateTotalCounter() {
    this.counterItems = this.shoppingCartItems.shopping_cart_items.length;

    if (this.counterItems) {
      setTimeout(() => {
        this.totalPrice = 0;
        this.counter = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.shoppingCartItems.shopping_cart_items.length; i++) {
          let count = 0;
          if (this.shoppingCartItems.shopping_cart_items[i].count) {
            // tslint:disable-next-line:radix
            count = parseInt(this.shoppingCartItems.shopping_cart_items[i].count);
          } else {
            count = 0;
          }
          this.totalPrice = this.totalPrice + (this.shoppingCartItems.shopping_cart_items[i].price * count);
          // tslint:disable-next-line:radix
          this.counter = this.counter + (1 * count);
        }
      }, 1);

    } else {
      this.counter = 0;
      this.totalPrice = 0;
    }
    setTimeout(() => {
      this.counterElement.emit(this.counter);
    }, 1);
  }

  incrementElement(i) {
    this.shoppingCartItems.shopping_cart_items[i].count++;
    this.calculateTotalCounter();
  }

  decrementElement(i) {
    // case counter is 0
    if (this.shoppingCartItems.shopping_cart_items[i].count === 0) {
      return true;
    } else {
      this.shoppingCartItems.shopping_cart_items[i].count--;
      this.calculateTotalCounter();
    }
  }

  removeElement(i) {
    this.shoppingCartItems.shopping_cart_items.splice(i, 1);
    this.calculateTotalCounter();
  }

  removeAll() {
    this.shoppingCartItems.shopping_cart_items = [];
    this.calculateTotalCounter();
    this.showAlert = true;
  }

  // end Cart Operations functions
// input field imposing the use of only numbers
  checkUsedKey(event) {
    return (event.charCode === 8 || event.charCode === 0 || event.charCode === 13) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
}
