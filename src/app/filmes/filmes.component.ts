import { Component, OnInit } from '@angular/core';
import { MediaType, Result } from '../services/filmes.model';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  //ATRIBUTOS
  inicializado = false;
  filmes: Result[]
  page = 0

  //CONSTRUTOR
  constructor(private filmesService: FilmesService) {
    filmesService.getFilmesAsObservable().subscribe((dados) => {
      this.filmes = dados;
      if (this.inicializado) {
        this.scrollToBottom()
      }
      console.log("seila", dados);
      this.inicializado = true;

    });
  }
 //EVENTO
  ngOnInit(): void {
    this.filmesService.getFilmeESerieAleatorio();

  }
  meTrazFilme() {
    this.filmesService.getFilmesESeries(3, MediaType.Movie, ++this.page);
  }
  meTrazSerie() {
    this.filmesService.getFilmesESeries(3, MediaType.Tv, ++this.page);
  }
  
  private scrollToBottom() {
    const elmnts = document.getElementById("elmnts");
    elmnts.scrollIntoView(false);
  }
}


