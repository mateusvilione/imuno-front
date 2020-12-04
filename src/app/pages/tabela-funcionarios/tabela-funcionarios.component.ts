import { FuncionarioModel } from './../funcionario/model/funcionario-model';
import { Component, OnInit } from '@angular/core';
import { FuncionarioRepository } from '../funcionario/repository/funcionario-repository';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-tabela-funcionarios',
  templateUrl: './tabela-funcionarios.component.html',
  styleUrls: ['./tabela-funcionarios.component.css']
})
export class TabelaFuncionariosComponent implements OnInit {
  funcionarios: FuncionarioModel[] = [];

  constructor(
    private repository: FuncionarioRepository,
    public service: AuthService
  ) {}

  ngOnInit() {
    this.carregarFuncionarios();
  }

  carregarFuncionarios() {
    this.repository.getAllFuncionarios().then((resposta) => {
      console.log(resposta);
      this.funcionarios = resposta;
    });
  }
}
