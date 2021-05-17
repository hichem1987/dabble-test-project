import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SideBarComponent} from './side-bar/side-bar.component';
import {GridPanelComponent} from './grid-panel/grid-panel.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MockHttpCalIInterceptor } from './http.interceptor';
import { AlertTransationFinishedComponent } from './alert-transation-finished/alert-transation-finished.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    GridPanelComponent,
    TopBarComponent,
    ShoppingCartComponent,
    AlertTransationFinishedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MockHttpCalIInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
