import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private filme: FilmesService) { }

  ngOnInit(): void {
  }

  botaoRandomico() {
    this.filme.getFilmeESerieAleatorio();
  }

}
