import { Component, OnInit } from '@angular/core';
import { VacinaModel } from './model/vacina-model';
import { VacinaRepository } from './repository/vacina-repository';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-vacina',
  templateUrl: './vacina.component.html',
  styleUrls: ['./vacina.component.css']
})
export class VacinaComponent implements OnInit {

  public formulario: FormGroup;

  public submitted: boolean = false;

  mensagem: Message[] = [];

  operacao: boolean = true;

  posto: VacinaModel;

  constructor(
    private repository: VacinaRepository,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
    //   id: [null],
    //   administrador: [null],
      nome: ['', Validators.required],
      prevencao: ['', Validators.required]
    });
  }

  cadastrar() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    this.salvar();
  };

  salvar() {
    const dados = {
      // id: this.formulario.value.id,
      nome: this.formulario.value.nome,
      prevencao: this.formulario.value.prevencao
    } as VacinaModel;

    console.log("dados" + dados);

    if (dados.id) {
      this.repository.putVacina(dados).subscribe(resposta => {
        this.limparFormulario();
      });
    } else {
      this.repository.postVacina(dados).subscribe(resposta => {
        this.mensagem = [
          {
            severity: 'success',
            summary: 'Vacina',
            detail: 'cadastrado com sucesso!'
          }];
        this.limparFormulario();
      },
        (e) => {
          var msg: any[] = [];
          //Erro Principal
          msg.push({
            severity: 'error',
            summary: 'ERRO',
            detail: e.error.userMessage
          });
          //Erro de cada atributo
          var erros = e.error.objects;
          erros.forEach(function (value) {
            msg.push(
              {
                severity: 'error',
                summary: 'ERRO',
                detail: value.userMessage
              });
          });
          this.mensagem = msg;
        }
      );
    }
  }

  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
  }

}