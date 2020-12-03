import { PostoModel } from '../model/posto-model';
import { PostoRepository } from '../repository/posto-repository';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { AuthService } from 'src/app/seguranca/auth.service';
import { ParsedVariable } from '@angular/compiler';

@Component({
  selector: 'app-cadastrar-posto',
  templateUrl: './cadastrar-posto.component.html',
  styleUrls: ['./cadastrar-posto.component.css'],
})
export class CadastrarPostoComponent implements OnInit {
  public formulario: FormGroup;

  public submitted: boolean = false;

  mensagem: Message[] = [];

  operacao: boolean = true;

  posto: PostoModel;

  constructor(
    private repository: PostoRepository,
    private messageService: MessageService,
    public service: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      //   id: [null],
      //   administrador: [null],
      nome: ['', Validators.required],
      cnes: ['', Validators.required],
      telefone: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      cep: ['', Validators.required],
    });
  }

  cadastrar() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    this.salvar();
  }

  salvar() {
    const dados = {
      // id: this.formulario.value.id,
      administradorId: parseInt(this.service.showId()),
      nome: this.formulario.value.nome,
      cnes: this.formulario.value.cnes,
      telefone: this.formulario.value.telefone,
      endereco: {
        logradouro: this.formulario.value.logradouro,
        numero: this.formulario.value.numero,
        complemento: this.formulario.value.complemento,
        bairro: this.formulario.value.bairro,
        cidade: this.formulario.value.cidade,
        estado: this.formulario.value.estado,
        cep: this.formulario.value.cep,
      },
    } as PostoModel;

    this.repository.postPosto(dados).subscribe(
      (resposta) => {
        this.messageService.add({
          key: 'toast',
          severity: 'success',
          summary: 'Posto',
          detail: 'cadastrado com sucesso!',
        });
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
