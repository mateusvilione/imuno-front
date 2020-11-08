import { PostoEntity } from '../entity/posto-entity';
import { PostoModel } from '../model/posto-model';
import { PostoRepository } from '../repository/posto-repository';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-editar-perfil-posto',
  templateUrl: './editar-perfil-posto.component.html',
  styleUrls: ['./editar-perfil-posto.component.css']
})
export class EditarPerfilPostoComponent implements OnInit {

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
      this.iniciarForm();
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
      cnpjRne: this.formulario.value.cnpjRne,
      telefone: this.formulario.value.telefone,
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
    } as PostoModel;

    console.log("dados" + dados);

    if (dados.id) {
      this.repository.putPosto(dados).subscribe(resposta => {
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

  iniciarForm(){
    this.repository.getPostoById(5).subscribe(resposta => {
      this.posto = resposta as PostoModel;
    });
  }

  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
  }

}
