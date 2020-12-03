import { CadernetaEntity } from './entity/caderneta-entity';
import { CadernetaModel } from './model/caderneta-model';
import { CadernetaRepository } from './repository/caderneta-repository';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-caderneta-vacinacao',
  templateUrl: './caderneta-vacinacao.component.html',
  styleUrls: ['./caderneta-vacinacao.component.css'],
})
export class CadernetaVacinacaoComponent implements OnInit {
  vacinas: CadernetaModel[] = [];

  constructor(
    private repository: CadernetaRepository,
    public service: AuthService
  ) {}

  ngOnInit() {
    this.carregarCaderneta(parseInt(this.service.showId()));
  }

  carregarCaderneta(id: number) {
    this.repository.getCadernetaByPaciente(id).then((resposta) => {
      console.log(resposta);
      this.vacinas = resposta;
    });
  }
}
