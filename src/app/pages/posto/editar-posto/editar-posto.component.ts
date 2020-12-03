import { PostoEntity } from '../entity/posto-entity';
import { PostoModel } from '../model/posto-model';
import { PostoRepository } from '../repository/posto-repository';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-editar-posto',
  templateUrl: './editar-posto.component.html',
  styleUrls: ['./editar-posto.component.css']
})
export class EditarPostoComponent implements OnInit {

  public formulario: FormGroup;

  public submitted: boolean = false;

  mensagem: Message[] = [];

  operacao: boolean = true;

  posto: PostoModel;

  constructor(
    private repository: PostoRepository,
    private route: ActivatedRoute,
    public service: AuthService,
    private messageService: MessageService,
    private title: Title,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    const codigoPosto = this.route.snapshot.params['codigo'];

    // const codigo = this.service.jwtPayload.usuario_id;

    this.iniciarFormulario();

    this.title.setTitle('Editar Posto');

    if (codigoPosto) {
      this.operacao = false;
      this.carregarPosto(codigoPosto);
    }
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      id: [null],
      administradorId: [null],
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

  carregarPosto(codigoPosto: number){
    this.repository.getPostoById(codigoPosto).subscribe(resposta => {
      this.formulario.controls.id.setValue(resposta.id);
      this.formulario.controls.nome.setValue(resposta.nome);
      this.formulario.controls.cnes.setValue(resposta.cnes);
      this.formulario.controls.telefone.setValue(resposta.telefone);
      this.formulario.controls.logradouro.setValue(resposta.endereco.logradouro);
      this.formulario.controls.numero.setValue(resposta.endereco.numero);
      this.formulario.controls.complemento.setValue(resposta.endereco.complemento);
      this.formulario.controls.bairro.setValue(resposta.endereco.bairro);
      this.formulario.controls.cidade.setValue(resposta.endereco.cidade);
      this.formulario.controls.estado.setValue(resposta.endereco.estado);
      this.formulario.controls.cep.setValue(resposta.endereco.cep);
      this.formulario.controls.administradorId.setValue(resposta.administradorId);
    });
  }

  atualizar() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    this.salvar();
  };

  salvar() {
    const dados = {
      id: this.formulario.value.id,
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
      administradorId: parseInt(this.service.showId())
    } as PostoModel;

    console.log("dados" + dados);


    this.repository.postPosto(dados).subscribe(resposta => {
        this.messageService.add(
          {
            key: 'toast',
            severity: 'success',
            summary: 'Posto',
            detail: 'alterado com sucesso!',
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
