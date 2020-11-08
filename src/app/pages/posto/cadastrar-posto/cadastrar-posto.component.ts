import { PostoModel } from '../model/posto-model';
import { PostoRepository } from '../repository/posto-repository';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastrar-posto',
  templateUrl: './cadastrar-posto.component.html',
  styleUrls: ['./cadastrar-posto.component.css']
})
export class CadastrarPostoComponent implements OnInit {

  public formulario: FormGroup;

  public submitted: boolean = false;

  mensagem: Message[] = [];

  operacao: boolean = true;

  posto: PostoModel;

  constructor(
    private repository: PostoRepository,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
    // this.listarEstados();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      id: [null],
      nome: ['', Validators.required],
      cnpjRne: ['', Validators.required],
      telefone: ['', Validators.required],
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

  cadastrar() {
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
    } as PostoModel;

    console.log("dados" + dados);

    if (dados.id) {
      this.repository.putPosto(dados).subscribe(resposta => {
        this.limparFormulario();
      });
    } else {
      this.repository.postPosto(dados).subscribe(resposta => {
        this.mensagem = [
          {
            severity: 'success',
            summary: 'Posto',
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

  // listarEstados() {
  //   this.repository.getAllEstados().subscribe(resposta => {
  //     this.estados.push({ label: resposta.nome, value: resposta.id });
  //   });
  // }
  // listarCidades() {
  //   this.cidades = [];
  //   let id: number = this.formulario.value.estado;
  //   this.repository.getAllCidadesByEstado(id).subscribe(resposta => {
  //     this.cidades.push({ label: resposta.nome, value: resposta.id });
  //   });
  // }

  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
    // this.cidades = [];
    // this.estados = [];
    // this.listarEstados();
  }

}
