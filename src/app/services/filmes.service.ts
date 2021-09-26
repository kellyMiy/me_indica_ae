import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filmes, Result, MediaType } from './filmes.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private url = "https://api.themoviedb.org/3/trending/all/week?api_key=6128935993ebf9347d7da105e2068a5f&language=pt-BR" 

  constructor(private httpClient: HttpClient) { }

  private filmes: Subject<Result[]> = new Subject<Result[]>()

  getFilmesAsObservable() {
    return this.filmes.asObservable();
  }

  getFilmesESeries(qtd: number, filtro: MediaType, page=0): void {
    this.httpClient.get<Filmes>(this.url + "&page=" + page).subscribe(dados => {
      this.filmes.next(dados.results.filter(item => item.media_type === filtro).slice(0, qtd));
    });
  }
  getFilmeESerieAleatorio() {
    this.httpClient.get<Filmes>(this.url).subscribe(dados => {
      let idxA = -1;
      let idxB = -1;
      let idxC = -1;

      while (idxA == idxB || idxB == idxC || idxA == idxC) {
        
        idxA = this.getRandomInt(20);
        idxB = this.getRandomInt(20);
        idxC = this.getRandomInt(20);
      }

      this.filmes.next([
        dados.results[idxA],
        dados.results[idxB],
        dados.results[idxC]
      ]);
    });
  }
  
  private getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
  }
}

