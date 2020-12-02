import { VacinaModel } from './../../vacina/model/vacina-model';
import { LoteRepository } from '../../lote/repository/lote-repository';
import { LoteModel } from './../../lote/model/lote-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { VacinaRepository } from '../../vacina/repository/vacina-repository';

@Component({
  selector: 'app-cadastrar-lote',
  templateUrl: './cadastrar-lote.component.html',
  styleUrls: ['./cadastrar-lote.component.css']
})

export class CadastrarLoteComponent implements OnInit {
  public formulario: FormGroup;

  public submitted: boolean = false;

  mensagem: Message[] = [];

  vacinas: VacinaModel[] = [];

  lote: LoteModel;

  constructor(
    private repository: LoteRepository,
    private vacinaRepository: VacinaRepository,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.listarVacinas();
    this.iniciarFormulario();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      id: [null],
      administradorId: [null],
      codigo: ['', Validators.required],
      dataEntrada: [ '', Validators.required],
      dataFabricacao: ['', Validators.required],
      dataValidade: ['', Validators.required],
      postoId: ['', Validators.required],
      quantidade: ['', Validators.required],
      vacinaId: ['', Validators.required]
    });
  }

  cadastrar() {
    // this.submitted = true;
    // if (this.formulario.invalid) {
    //   return;
    // }
    this.salvar();
  }

  salvar() {

    const dados = {
      // id: this.formulario.value.id,
      administradorId: 1, // this.formulario.value.administradorId,
      codigo: this.formulario.value.codigo,
      dataEntrada: this.formulario.value.dataEntrada,
      dataFabricacao: this.formulario.value.dataFabricacao,
      dataValidade: this.formulario.value.dataValidade,
      postoId: 1, //this.formulario.value.postoId,
      quantidade: this.formulario.value.quantidade,
      vacinaId: this.formulario.value.vacinaId,
    } as LoteModel;

    console.log('dados' + dados);

    this.repository.postLote(dados).subscribe(
      (resposta) => {
        this.mensagem = [
          {
            severity: 'success',
            summary: 'Paciente',
            detail: 'cadastrado com sucesso!',
          },
        ];
        this.limparFormulario();
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
        erros.forEach(function (value) {
          msg.push({
            severity: 'error',
            summary: 'ERRO',
            detail: value.userMessage,
          });
        });
        this.mensagem = msg;
      }
    );
  }

  listarVacinas() {
    this.vacinaRepository.getAllVacinas().then(resposta => {
      this.vacinas = resposta;
    });
  }

  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
  }
}

