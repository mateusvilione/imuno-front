import { LoteModel } from '../caderneta-vacinacao/model/caderneta-model';
import { Component, OnInit } from '@angular/core';
import { LoteRepository } from '../lote/repository/lote-repository';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-tabela-lotes',
  templateUrl: './tabela-lotes.component.html',
  styleUrls: ['./tabela-lotes.component.css']
})
export class TabelaLotesComponent implements OnInit {
  lotes: LoteModel[] = [];

  constructor(
    private repository: LoteRepository,
    public service: AuthService
  ) {}

  ngOnInit() {
    this.carregarVacinas();
  }

  carregarVacinas() {
    this.repository.getAllLote().then((resposta) => {
      console.log(resposta);
      this.lotes = resposta;
    });
  }
}
