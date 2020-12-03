import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { VacinaModel } from '../model/vacina-model';
import { VacinaRepository } from '../repository/vacina-repository';


@Component({
  selector: 'app-cadastrar-vacina',
  templateUrl: './cadastrar-vacina.component.html',
  styleUrls: ['./cadastrar-vacina.component.css']
})
export class CadastrarVacinaComponent implements OnInit {

  public formulario: FormGroup;

  public submitted: boolean = false;

  mensagem: Message[] = [];

  operacao: boolean = true;

  posto: VacinaModel;

  constructor(
    private repository: VacinaRepository,
    private messageService: MessageService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      prevencao: ['', Validators.required]
    });
  }

  cadastrar() {
    // this.submitted = true;
    // if (this.formulario.invalid) {
    //   return;
    // }
    this.salvar();
  };

  salvar() {
    const dados = {
      // id: this.formulario.value.id,
      nome: this.formulario.value.nome,
      prevencao: this.formulario.value.prevencao
    } as VacinaModel;

    console.log("dados" + dados);


    this.repository.postVacina(dados).subscribe(resposta => {
        this.messageService.add(
          {
            key: 'toast',
            severity: 'success',
            summary: 'Vacina',
            detail: 'cadastrada com sucesso!',
          },
        );
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
        erros.forEach(function (elemento) {
          msg.push(
            {
              severity: 'error',
              summary: 'ERRO',
              detail: elemento.userMessage
            });
        });
        this.messageService.addAll(msg);
      });
  }

  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
  }

}
