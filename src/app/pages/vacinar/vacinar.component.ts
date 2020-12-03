import { CadernetaRepository } from './../caderneta-vacinacao/repository/caderneta-repository';
import { FuncionarioCompletoModel } from './../funcionario/model/funcionario-model';
import { FuncionarioCompletoEntity } from './../funcionario/entity/funcionario-entity';
import { PostoEntity } from './../posto/entity/posto-entity';
import { FuncionarioModel, CadernetaModel } from './../caderneta-vacinacao/model/caderneta-model';
import { FuncionarioRepository } from './../funcionario/repository/funcionario-repository';
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
import { stringify } from '@angular/compiler/src/util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-vacinar',
  templateUrl: './vacinar.component.html',
  styleUrls: ['./vacinar.component.css'],
})
export class VacinarComponent implements OnInit {
  public formulario: FormGroup;
  public pesquisa: FormGroup;

  public submitted: boolean = false;

  mensagem: Message[] = [];

  cpf: string = "";

  pacientes: PacienteModel[] = [];

  vacinas: VacinaModel[] = [];

  caderneta: CadernetaModel[] = [];

  lotes: LoteModel[] = [];

  funcionario: FuncionarioCompletoModel = null;

  operacao: boolean = true;

  id: number = null;

  posto: VacinarModel;

  constructor(
    private repository: VacinarRepository,
    private pacienteRepository: PacienteRepository,
    private vacinaRepository: VacinaRepository,
    private cadernetaRepository: CadernetaRepository,
    private funcionarioRepository: FuncionarioRepository,
    private loteRepository: LoteRepository,
    public service: AuthService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.listarVacinas();
    this.listarfuncionario(1);
    this.iniciarFormulario();
  }

  public iniciarFormulario() {
    this.pesquisa = this.fb.group({
      cpfRne: ['', Validators.required],
      pacienteId: ['0', Validators.required],
    });
    this.formulario = this.fb.group({
      cpfRne: ['', Validators.required],
      dose: ['0', Validators.required],
      dataVacinacao: ['', Validators.required],
      funcionarioId: ['', Validators.required],
      loteId: ['0', Validators.required],
      pacienteId: ['0', Validators.required],
      vacinaId: ['0', Validators.required]
    });
  }

  cadastrar() {
    // this.submitted = true;
    // if (this.formulario.invalid) {
    //   console.log(this.formulario.invalid);
    //   return;
    // }
    this.salvar();
  }

  salvar() {
    const dados = {
      dose: this.formulario.value.dose,
      dataVacinacao: this.formulario.value.dataVacinacao,
      funcionarioId: parseInt(this.service.showId()),
      loteId: this.formulario.value.loteId,
      pacienteId: this.pesquisa.value.pacienteId,
      vacinaId: this.formulario.value.vacinaId,
      postoId: this.funcionario.posto.id,
    } as VacinarModel;

    console.log('dados' + dados);

    this.repository.postVacinar(dados).subscribe(
      (resposta) => {
        this.messageService.add(
          {
            severity: 'success',
            summary: 'Vacina',
            detail: 'cadastrado com sucesso!',
          });
        this.limparCampos();
        this.carregarVacinas();
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

  listarVacinas() {
    this.vacinaRepository.getAllVacinas().then(resposta => {
      this.vacinas = resposta;
    });
  }

  listarfuncionario(id: number) {
    this.funcionarioRepository.getFuncionarioById(id).subscribe(resposta => {
      this.funcionario = resposta;
    });
  }

  listarLotes() {
    this.loteRepository.getAllLoteByVacina(this.formulario.value.vacinaId).then(resposta => {
      this.lotes = resposta;
    });
  }

  carregarPaciente() {
    this.pacientes = [];

    this.cpf = this.pesquisa.value.cpfRne;

    this.cpf = this.cpf.replace(".", "");
    this.cpf = this.cpf.replace(".", "");
    this.cpf = this.cpf.replace("-", "");

    console.log(this.cpf);
    this.pacienteRepository.getPaciente(this.cpf).subscribe(resposta => {
      this.caderneta = [];
      this.pacientes.push(resposta);
    });
  }

  limparFormularios() {
    this.submitted = false;
    this.formulario.reset();
    this.pesquisa.reset();
    this.caderneta = [];

    this.iniciarFormulario();
  }

  limparCampos() {
    this.submitted = false;
    this.formulario.reset();
    this.formulario.value.pacienteId = this.pesquisa.value.pacienteId;
  }

  carregarVacinas() {
    this.id = this.pesquisa.value.pacienteId;
    this.cadernetaRepository.getCadernetaByPaciente(this.id).then((resposta) => {
      console.log(resposta);
      this.caderneta = resposta;
    });
  }



}
