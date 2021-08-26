import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { FooterComponent } from './navigation/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
