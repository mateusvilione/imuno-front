import { PacienteModel } from '../model/paciente-model';
import { PacienteRepository } from '../repository/paciente-repository';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.css'],
})
export class CadastrarPacienteComponent implements OnInit {
  public formulario: FormGroup;

  public submitted: boolean = false;

  mensagem: Message[] = [];

  paciente: PacienteModel;

  constructor(
    private repository: PacienteRepository,
    private messageService: MessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.iniciarFormulario();
    // this.listarEstados();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      id: [null],
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      genero: ['', Validators.required],
      cpfRne: ['', Validators.required],
      nomeMae: ['', Validators.required],
      nomePai: [''],
      telefone: ['', Validators.required],
      telefoneEmergencia: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      senha: ['', Validators.required],
      confirmacaoSenha: ['', Validators.required],
      cartaoSus: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      cep: ['', Validators.required],
    });
  }

  public senhasIguais() {
    var password = (<HTMLSelectElement>document.getElementById('senha')).value;
    var confirm_password = (<HTMLSelectElement>(
      document.getElementById('confirmacaoSenha')
    )).value;

    if (password == confirm_password) {
      return true;
    } else {
      return false;
    }
  }

  public senhasDiferentes() {
    var password = (<HTMLSelectElement>document.getElementById('senha')).value;
    var confirm_password = (<HTMLSelectElement>(
      document.getElementById('confirmacaoSenha')
    )).value;

    if (password != confirm_password) {
      return true;
    } else {
      return false;
    }
  }

  cadastrar() {
    this.submitted = true;
    if (this.formulario.invalid) {
      console.log('deu ruim');
      return;
    }
    this.salvar();
  }

  salvar() {
    const dados = {
      // id: this.formulario.value.id,
      nome: this.formulario.value.nome,
      dataNascimento: this.formulario.value.dataNascimento,
      genero: this.formulario.value.genero,
      cpfRne: this.formulario.value.cpfRne,
      nomeMae: this.formulario.value.nomeMae,
      nomePai: this.formulario.value.nomePai,
      telefone: this.formulario.value.telefone,
      telefoneEmergencia: this.formulario.value.telefoneEmergencia,
      email: this.formulario.value.email,
      senha: this.formulario.value.senha,
      cartaoSus: this.formulario.value.cartaoSus,
      endereco: {
        logradouro: this.formulario.value.logradouro,
        numero: this.formulario.value.numero,
        complemento: this.formulario.value.complemento,
        bairro: this.formulario.value.bairro,
        cidade: this.formulario.value.cidade,
        estado: this.formulario.value.estado,
        cep: this.formulario.value.cep,
      },
    } as PacienteModel;

    console.log('dados' + dados);

    this.repository.postPaciente(dados).subscribe(resposta => {
      this.messageService.add(
        {
          key: 'toast',
          severity: 'success',
          summary: 'Paciente',
          detail: 'cadastrado com sucesso!',
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
