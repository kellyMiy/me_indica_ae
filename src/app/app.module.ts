import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmesComponent } from './filmes/filmes.component';
import { registerLocaleData } from '@angular/common';
import  localePT from '@angular/common/locales/pt';

registerLocaleData(localePT)
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    FilmesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
