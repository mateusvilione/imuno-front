import { PostoRepository } from './../../posto/repository/posto-repository';
import { AuthService } from 'src/app/seguranca/auth.service';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionarioRepository } from '../repository/funcionario-repository';
import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from '../model/funcionario-model';
import { PostoAllModel } from '../../posto/model/posto-model';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css'],
})
export class CadastrarFuncionarioComponent implements OnInit {
  public formulario: FormGroup;

  postos: number = 0;

  public submitted: boolean = false;

  operacao: boolean = true;

  constructor(
    private repository: FuncionarioRepository,
    private postoRepository: PostoRepository,
    private messageService: MessageService,
    private service: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.carregarPosto()
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
      email: ['', [Validators.email, Validators.required]],
      senha: ['', Validators.required],
      confirmacaoSenha: ['', Validators.required],
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

    if (password === confirm_password) {
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

    if (password !== confirm_password) {
      return true;
    } else {
      return false;
    }
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
      },
      postoId: this.postos,
    } as FuncionarioModel;

    console.log('dados' + dados);

    this.repository.postFuncionario(dados).subscribe(
      (resposta) => {
        this.messageService.add({
          key: 'toast',
          severity: 'success',
          summary: 'Funcionario',
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

  carregarPosto() {
    this.postoRepository
      .getAllPostos(parseInt(this.service.showId()))
      .subscribe((resposta) => {
        console.log("bbbbbbbbbbbbbbb" + resposta.id);
        this.postos = resposta.id;
      });
  }

  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
  }
}
