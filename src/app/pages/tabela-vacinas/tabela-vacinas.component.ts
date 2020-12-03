import { VacinaRepository } from '../vacina/repository/vacina-repository';
import { VacinaModel } from '../vacina/model/vacina-model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-tabela-vacinas',
  templateUrl: './tabela-vacinas.component.html',
  styleUrls: ['./tabela-vacinas.component.css']
})
export class TabelaVacinasComponent implements OnInit {
  vacinas: VacinaModel[] = [];

  constructor(
    private repository: VacinaRepository,
    public service: AuthService
  ) {}

  ngOnInit() {
    this.carregarVacinas();
  }

  carregarVacinas() {
    this.repository.getAllVacinas().then((resposta) => {
      console.log(resposta);
      this.vacinas = resposta;
    });
  }
}
