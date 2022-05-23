import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { DisplayAreaComponent } from './components/display-area/display-area.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    DisplayAreaComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
