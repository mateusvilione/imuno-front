import { PacienteEntity } from '../entity/paciente-entity';
import { PacienteModel } from '../model/paciente-model';
import { PacienteRepository } from '../repository/paciente-repository';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';

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
    private fb: FormBuilder) { }

    ngOnInit(): void {
      this.iniciarFormulario();
      this.iniciarForm();
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
      nacionalidade: ['', Validators.required],
      telefone: ['', Validators.required],
      telefoneEmergencia: ['', Validators.required],
      email: ['', Validators.email],
      senha: ['', Validators.required],
      confirmacaoSenha: ['', Validators.required],
      cartaoSus: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      cep: ['', Validators.required],
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
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    this.salvar();
  };

  salvar() {
    // const listaTelefones = [];
    // this.formulario.value.telefones.forEach(element => {
    //   listaTelefones.push({
    //     id:null,numero:element,tipo:'casa'
    //   })
    // });
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
      }
    } as PacienteModel;

    console.log("dados" + dados);

    if (dados.id) {
      this.repository.putPaciente(dados).subscribe(resposta => {
        this.mensagem = [
          {
            severity: 'success',
            summary: 'Paciente',
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

  iniciarForm(){
    this.repository.getPacienteById(5).subscribe(resposta => {
      this.paciente = resposta as PacienteModel;
    });
  }

  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
  }

}