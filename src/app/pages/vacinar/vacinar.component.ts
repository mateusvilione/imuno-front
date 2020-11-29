import { LoteRepository } from './../lote/repository/lote-repository';
import { PacienteRepository } from './../paciente/repository/paciente-repository';
import { VacinaRepository } from './../vacina/repository/vacina-repository';
import { LoteModel } from './../lote/model/lote-model';
import { PacienteModel } from './../paciente/model/paciente-model';
import { VacinaModel } from './../vacina/model/vacina-model';
import { Component, OnInit } from '@angular/core';
import { VacinarModel } from './model/vacinar-model';
import { VacinarRepository } from './repository/vacinar-repository';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-vacinar',
  templateUrl: './vacinar.component.html',
  styleUrls: ['./vacinar.component.css'],
})
export class VacinarComponent implements OnInit {
  public formulario: FormGroup;

  public submitted: boolean = false;

  mensagem: Message[] = [];

  pacientes: PacienteModel[] = [];

  vacinas: VacinaModel[] = [];

  lotes: LoteModel[] = [];

  operacao: boolean = true;

  posto: VacinarModel;

  constructor(
    private repository: VacinarRepository,
    private pacienteRepository: PacienteRepository,
    private vacinaRepository: VacinaRepository,
    private loteRepository: LoteRepository,
    private fb: FormBuilder
    ) {}

  ngOnInit(): void {
    this.listarPacientes();
    this.listarVacinas();
    this.listarLotes();
    this.iniciarFormulario();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      cpfRne: ['', Validators.required],
      dose: ['', Validators.required],
      dataVacinacao: ['' , Validators.required],
      funcionarioId: ['', Validators.required],
      loteId: ['', Validators.required],
      pacienteId: ['', Validators.required],
      vacinaId: ['', Validators.required]
    });
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
      dose: this.formulario.value.dose,
      dataVacinacao: this.formulario.value.dataVacinacao,
      funcionarioId: 1, //this.formulario.value.funcionarioId,
      loteId: this.formulario.value.loteId,
      pacienteId: this.formulario.value.pacienteId,
      vacinaId: this.formulario.value.vacinaId
    } as VacinarModel;

    console.log('dados' + dados);

    this.repository.postVacinar(dados).subscribe(
      (resposta) => {
        this.mensagem = [
          {
            severity: 'success',
            summary: 'Vacina',
            detail: 'cadastrado com sucesso!',
          },
        ];
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
        erros.forEach(function (value) {
          msg.push({
            severity: 'error',
            summary: 'ERRO',
            detail: value.userMessage,
          });
        });
        this.mensagem = msg;
      }
    );
  }

  listarVacinas() {
    this.vacinaRepository.getAllVacinas().then(resposta => {
      this.vacinas = resposta;
    });
  }

  listarLotes() {
    this.loteRepository.getAllLote().then(resposta => {
      this.lotes = resposta;
    });
  }

  listarPacientes() {
    this.pacienteRepository.getAllPaciente().then(resposta => {
      this.pacientes = resposta;
    });
  }

  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
  }
}
