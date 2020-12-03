import { VacinaRepository } from './../repository/vacina-repository';
import { VacinaModel } from '../model/vacina-model';
import { Message, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-editar-vacina',
  templateUrl: './editar-vacina.component.html',
  styleUrls: ['./editar-vacina.component.css'],
})
export class EditarVacinaComponent implements OnInit {
  public formulario: FormGroup;

  public submitted: boolean = false;

  mensagem: Message[] = [];

  operacao: boolean = true;

  posto: VacinaModel;

  vacinaId: number = 0;

  constructor(
    private repository: VacinaRepository,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.vacinaId = this.route.snapshot.params['codigo'];

    this.carregarVacina(this.vacinaId);

    this.iniciarFormulario();
  }

  carregarVacina(vacinaId: any) {
    this.repository.getVacinaById(vacinaId).subscribe((resposta) => {
      this.formulario.controls.nome.setValue(resposta.nome);
      this.formulario.controls.prevencao.setValue(resposta.prevencao);
    });
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      prevencao: ['', Validators.required],
    });
  }

  atualizar() {
    // this.submitted = true;
    // if (this.formulario.invalid) {
    //   return;
    // }
    this.salvar();
  }

  salvar() {
    const dados = {
      id: this.vacinaId,
      nome: this.formulario.value.nome,
      prevencao: this.formulario.value.prevencao,
    } as VacinaModel;

    console.log('dados' + dados);

    this.repository.putVacina(dados).subscribe(
      (resposta) => {
        this.messageService.add({
          key: 'toast',
          severity: 'success',
          summary: 'Vacina',
          detail: 'alterado com sucesso!',
        });
        this.limparFormulario();
        this.carregarVacina(dados.id);
      },
      (e) => {
        var msg: any[] = [];
        //Erro Principal
        msg.push({
          severity: 'error',
          summary: 'ERRO',
          detail: e.error.userMessage,
        });
        //Erro de cada atributo
        var erros = e.error.objects;
        erros.forEach(function (elemento) {
          msg.push({
            severity: 'error',
            summary: 'ERRO',
            detail: elemento.userMessage,
          });
        });
        this.messageService.addAll(msg);
      }
    );
  }

  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
  }
}
