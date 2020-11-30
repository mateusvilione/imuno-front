import { CadernetaEntity } from './entity/caderneta-entity';
import { CadernetaModel } from './model/caderneta-model';
import { CadernetaRepository } from './repository/caderneta-repository';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'app-caderneta-vacinacao',
  templateUrl: './caderneta-vacinacao.component.html',
  styleUrls: ['./caderneta-vacinacao.component.css'],
})
export class CadernetaVacinacaoComponent implements OnInit {
  vacinas: CadernetaModel[] = [];

  @Input()
  idPaciente: number;

  constructor(
    private repository: CadernetaRepository
  ) {}

  ngOnInit() {
    if (this.idPaciente != null) {
      this.carregarCaderneta(this.idPaciente);
    } else {
      this.carregarCaderneta(1);
    }
  }

  carregarCaderneta(id: number) {
    this.repository.getCadernetaByPaciente(id).then((resposta) => {
      console.log(resposta);
      this.vacinas = resposta;
    });
  }
}
