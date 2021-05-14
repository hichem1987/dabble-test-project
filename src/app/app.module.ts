import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './side-bar/side-bar.component';
import { GridPanelComponent } from './grid-panel/grid-panel.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    GridPanelComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
