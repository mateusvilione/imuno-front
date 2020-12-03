import { LoteModel } from '../caderneta-vacinacao/model/caderneta-model';
import { Component, OnInit } from '@angular/core';
import { LoteRepository } from '../lote/repository/lote-repository';
import { AuthService } from '../../seguranca/auth.service';
import { LoteAllModel } from '../lote/model/lote-model';

@Component({
  selector: 'app-tabela-lotes',
  templateUrl: './tabela-lotes.component.html',
  styleUrls: ['./tabela-lotes.component.css']
})
export class TabelaLotesComponent implements OnInit {
  lotes: LoteAllModel[] = [];

  constructor(
    private repository: LoteRepository,
    public service: AuthService
  ) {}

  ngOnInit() {
    this.carregarLotes();
  }

  carregarLotes() {
    this.repository.getAllLote().then((resposta) => {
      console.log(resposta);
      this.lotes = resposta;
    });
  }
}
