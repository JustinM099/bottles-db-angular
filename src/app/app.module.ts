import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { DisplayAreaComponent } from './components/display-area/display-area.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './components/add/add.component';
import { AddPageComponent } from './components/add-page/add-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    DisplayAreaComponent,
    AddComponent,
    AddPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
