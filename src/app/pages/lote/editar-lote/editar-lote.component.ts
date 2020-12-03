import { VacinaModel } from './../../vacina/model/vacina-model';
import { LoteRepository } from '../../lote/repository/lote-repository';
import { LoteModel } from './../../lote/model/lote-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { VacinaRepository } from '../../vacina/repository/vacina-repository';

@Component({
  selector: 'app-editar-lote',
  templateUrl: './editar-lote.component.html',
  styleUrls: ['./editar-lote.component.css']
})
export class EditarLoteComponent implements OnInit {

  public formulario: FormGroup;

  public submitted: boolean = false;

  mensagem: Message[] = [];

  vacinas: VacinaModel[] = [];

  operacao: boolean = true;

  lote: LoteModel;

  constructor(
    private repository: LoteRepository,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private vacinaRepository: VacinaRepository,
    private title: Title,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    const codigoLote = this.route.snapshot.params['codigo'];

    // const codigo = this.service.jwtPayload.usuario_id;


    this.listarVacinas();
    this.iniciarFormulario();

    this.title.setTitle('Editar Perfil');

    if (codigoLote) {
      this.operacao = false;
      this.carregarLote(codigoLote);
    }
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      id: [null],
      administradorId: [null],
      codigo: ['', Validators.required],
      dataEntrada: ['', Validators.required],
      dataFabricacao: ['', Validators.required],
      dataValidade: ['', Validators.required],
      postoId: ['', Validators.required],
      quantidade: ['', Validators.required],
      vacinaId: ['', Validators.required]
    });
  }

  carregarLote(codigoCliente: number) {
    this.repository.getLoteById(codigoCliente).subscribe(resposta => {
      this.formulario.controls.id.setValue(resposta.id);
      this.formulario.controls.administradorId.setValue(resposta.administradorId);
      this.formulario.controls.codigo.setValue(resposta.codigo);
      this.formulario.controls.dataEntrada.setValue(resposta.dataEntrada);
      this.formulario.controls.dataFabricacao.setValue(resposta.dataFabricacao);
      this.formulario.controls.dataValidade.setValue(resposta.dataValidade);
      this.formulario.controls.postoId.setValue(resposta.postoId);
      this.formulario.controls.quantidade.setValue(resposta.quantidade);
      this.formulario.controls.vacinaId.setValue(resposta.vacinaId);
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
      administradorId: this.formulario.value.administradorId,
      codigo: this.formulario.value.codigo,
      dataEntrada: this.formulario.value.dataEntrada,
      dataFabricacao: this.formulario.value.dataFabricacao,
      dataValidade: this.formulario.value.dataValidade,
      postoId: this.formulario.value.postoId,
      quantidade: this.formulario.value.quantidade,
      vacinaId: this.formulario.value.vacinaId,
    } as LoteModel;

    if (dados.id) {
      this.repository.putLote(dados).subscribe(resposta => {
        this.messageService.add(
          {
            key: 'toast',
            severity: 'success',
            summary: 'Lote',
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
  }

  listarVacinas() {
    this.vacinaRepository.getAllVacinas().then(resposta => {
      this.vacinas = resposta;
    });
  }


  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
  }

}
