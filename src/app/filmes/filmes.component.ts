import { Component, OnInit } from '@angular/core';
import { MediaType, Result } from '../services/filmes.model';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  constructor(private filmesService: FilmesService ) {
    filmesService.getFilmesAsObservable().subscribe((dados)=>{
      this.filmes = dados;
      console.log("seila", dados);
    });
   }

  filmes: Result[]

  ngOnInit(): void {
    this.filmesService.getFilmeESerieAleatorio();
    
  }
    page = 0
  meTrazFilme(){
    this.filmesService.getFilmesESeries(3, MediaType.Movie, this.page++);
  }
  meTrazSerie(){
    this.filmesService.getFilmesESeries(3, MediaType.Tv, this.page++);
  }

}


