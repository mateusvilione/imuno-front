import { PacienteEntity } from '../entity/paciente-entity';
import { PacienteModel } from '../model/paciente-model';
import { PacienteRepository } from '../repository/paciente-repository';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-editar-perfil-paciente',
  templateUrl: './editar-perfil-paciente.component.html',
  styleUrls: ['./editar-perfil-paciente.component.css']
})
export class EditarPerfilPacienteComponent implements OnInit {

  public formulario: FormGroup;

  public submitted: boolean = false;

  mensagem: Message[] = [];

  operacao: boolean = true;

  paciente: PacienteModel;

  constructor(
    private repository: PacienteRepository,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private title: Title,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    const codigoCliente = this.route.snapshot.params['codigo'];

    // const codigo = this.service.jwtPayload.usuario_id;

    this.iniciarFormulario();

    this.title.setTitle('Editar Perfil');

    if (codigoCliente) {
      this.operacao = false;
      this.carregarPaciente(codigoCliente);
    }
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      id: [null],
      usuarioId: [null],
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      genero: ['', Validators.required],
      cpfRne: ['', Validators.required],
      nomeMae: ['', Validators.required],
      nomePai: [''],
      nacionalidade: ['', Validators.required],
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

  carregarPaciente(codigoCliente: number) {
    this.repository.getPacienteById(codigoCliente).subscribe(resposta => {
      this.formulario.controls.id.setValue(resposta.id);
      this.formulario.controls.nome.setValue(resposta.nome);
      this.formulario.controls.dataNascimento.setValue(resposta.dataNascimento);
      this.formulario.controls.genero.setValue(resposta.genero);
      this.formulario.controls.cpfRne.setValue(resposta.cpfRne);
      this.formulario.controls.nomeMae.setValue(resposta.nomeMae);
      this.formulario.controls.nomePai.setValue(resposta.nomePai);
      this.formulario.controls.telefone.setValue(resposta.telefone);
      this.formulario.controls.telefoneEmergencia.setValue(resposta.telefoneEmergencia);
      this.formulario.controls.email.setValue(resposta.email);
      this.formulario.controls.cartaoSus.setValue(resposta.cartaoSus);
      this.formulario.controls.logradouro.setValue(resposta.endereco.logradouro);
      this.formulario.controls.numero.setValue(resposta.endereco.numero);
      this.formulario.controls.complemento.setValue(resposta.endereco.complemento);
      this.formulario.controls.bairro.setValue(resposta.endereco.bairro);
      this.formulario.controls.cidade.setValue(resposta.endereco.cidade);
      this.formulario.controls.estado.setValue(resposta.endereco.estado);
      this.formulario.controls.cep.setValue(resposta.endereco.cep);
      this.formulario.controls.usuarioId.setValue(resposta.usuarioId);
    });
  }

  public senhasIguais() {
    var password = (<HTMLSelectElement>document.getElementById("senha")).value;
    var confirm_password = (<HTMLSelectElement>document.getElementById("confirmacaoSenha")).value;

    if (password == confirm_password) {
      return true;

    }
    else {
      return false;
    }
  }

  public senhasDiferentes() {
    var password = (<HTMLSelectElement>document.getElementById("senha")).value;
    var confirm_password = (<HTMLSelectElement>document.getElementById("confirmacaoSenha")).value;

    if (password != confirm_password) {
      return true;

    }
    else {
      return false;
    }
  }

  atualizar() {
    // this.submitted = true;
    // if (this.formulario.invalid) {
    //   return;
    // }
    this.salvar();
  };

  salvar() {
    const dados = {
      id: this.formulario.value.id,
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
      usuarioId: this.formulario.value.usuarioId,
    } as PacienteModel;

    console.log("dados" + dados.nome);

    if (dados.id) {
      this.repository.putPaciente(dados).subscribe(resposta => {
        this.messageService.add(
          {
            key: 'toast',
            severity: 'success',
            summary: 'Paciente',
            detail: 'Alterado com sucesso!'
          });
        this.limparFormulario();
        this.carregarPaciente(dados.id);
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
        }
      );
    }
  }

  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
  }

}
