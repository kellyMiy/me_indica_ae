import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmesComponent } from './filmes/filmes.component';
import { registerLocaleData } from '@angular/common';
import  localePT from '@angular/common/locales/pt';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmConstrucaoComponent } from './em-construcao/em-construcao.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : '**', component: EmConstrucaoComponent},
  
]

registerLocaleData(localePT)
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    FilmesComponent,
    FooterComponent,
    HomeComponent,
    EmConstrucaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
