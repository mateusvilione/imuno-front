import { PacienteModel } from './model/paciente-model';
import { PacienteRepository } from './repository/paciente-repository';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.css']
})
export class CadastrarPacienteComponent implements OnInit {

  public formulario: FormGroup;
  // estados: any[] = [];
  // cidades: any[] = [];
  public submitted: boolean = false;

  mensagem: Message[] = [];

  operacao: boolean = true;

  constructor(
    private repository: PacienteRepository,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
    // this.listarEstados();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      id: [null],
      nome: ['', Validators.required],
      dataNascimento: [''],
      genero: [''],
      cpfRne: [''],
      nomeMae: [''],
      nomePai: [''],
      nacionalidade: [''],
      telefone: [''],
      telefoneEmergencia: [''],
      email: ['', Validators.email],
      senha: [''],
      cartaoSus: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      cep: [''],
    });
    // this.formulario.controls.id.setValue('');
    // this.formulario.controls.nome.setValue('Rafael');
    // this.formulario.controls.sobrenome.setValue('Lopes');
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
    } as PacienteModel;

    console.log("dados" + dados);

    if (dados.id) {
      this.repository.putPaciente(dados).subscribe(resposta => {
        this.limparFormulario();
      });
    } else {
      this.repository.postPaciente(dados).subscribe(resposta => {
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
