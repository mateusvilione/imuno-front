import { Message } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionarioRepository } from '../repository/funcionario-repository';
import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from '../model/funcionario-model';

@Component({
  selector: 'app-editar-perfil-funcionario',
  templateUrl: './editar-perfil-funcionario.component.html',
  styleUrls: ['./editar-perfil-funcionario.component.css']
})
export class EditarPerfilFuncionarioComponent implements OnInit {

  public formulario: FormGroup;
  public submitted: boolean = false;

  mensagem: Message[] = [];

  operacao: boolean = true;

  constructor(
    private repository: FuncionarioRepository,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      id: [null],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      coren: ['', Validators.required],
      telefone: ['', Validators.required],
      telefoneEmergencia: ['', Validators.required],
      email: ['', Validators.email],
      senha: ['', Validators.required],
      confirmacaoSenha: ['', Validators.required],
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
    var telefoneEmergencia = (<HTMLSelectElement>document.getElementById("telefoneEmergencia")).value;
    console.log(telefoneEmergencia);
    const dados = {

      // id: this.formulario.value.id,
      nome: this.formulario.value.nome,
      cpf: this.formulario.value.cpf,
      coren: this.formulario.value.coren,
      telefone: this.formulario.value.telefone,
      telefoneEmergencia: this.formulario.value.telefoneEmergencia,
      email: this.formulario.value.email,
      senha: this.formulario.value.senha,
      endereco: {
        logradouro: this.formulario.value.logradouro,
        numero: this.formulario.value.numero,
        complemento: this.formulario.value.complemento,
        bairro: this.formulario.value.bairro,
        cidade: this.formulario.value.cidade,
        estado: this.formulario.value.estado,
        cep: this.formulario.value.cep,
      }
    } as FuncionarioModel;

    console.log("dados" + dados);

    if (dados.id) {
      this.repository.putFuncionario(dados).subscribe(resposta => {
        this.mensagem = [
          {
            severity: 'success',
            summary: 'Funcionario',
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
