import { TemplateModule } from './template/template.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarFuncionarioComponent } from './pages/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { CadastrarPacienteComponent } from './pages/paciente/cadastrar-paciente/cadastrar-paciente.component';
import { CadernetaVacinacaoComponent } from './pages/caderneta-vacinacao/caderneta-vacinacao.component';
import { EditarPerfilPacienteComponent } from './pages/paciente/editar-perfil-paciente/editar-perfil-paciente.component';
import { EditarPerfilFuncionarioComponent } from './pages/funcionario/editar-perfil-funcionario/editar-perfil-funcionario.component';
import { VacinarComponent } from './pages/vacinar/vacinar.component';
import { DashboardFuncionarioComponent } from './pages/dashboard-funcionario/dashboard-funcionario.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { CadastrarPostoComponent } from './pages/posto/cadastrar-posto/cadastrar-posto.component';
import { EditarPostoComponent } from './pages/posto/editar-posto/editar-posto.component';
import { CadastrarLoteComponent } from './pages/lote/cadastrar-lote/cadastrar-lote.component';
import { EditarLoteComponent } from './pages/lote/editar-lote/editar-lote.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TabelaVacinasComponent } from './pages/tabela-vacinas/tabela-vacinas.component';
import { TabelaLotesComponent } from './pages/tabela-lotes/tabela-lotes.component';
import { EditarVacinaComponent } from './pages/vacina/editar-vacina/editar-vacina.component';
import { CadastrarVacinaComponent } from './pages/vacina/cadastrar-vacina/cadastrar-vacina.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarPacienteComponent,
    CadernetaVacinacaoComponent,
    CadastrarFuncionarioComponent,
    EditarPerfilPacienteComponent,
    EditarPerfilFuncionarioComponent,
    VacinarComponent,
    DashboardFuncionarioComponent,
    DashboardAdminComponent,
    CadastrarPostoComponent,
    EditarPostoComponent,
    CadastrarLoteComponent,
    EditarLoteComponent,
    TabelaVacinasComponent,
    TabelaLotesComponent,
    EditarVacinaComponent,
    CadastrarVacinaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    InputMaskModule,
    FileUploadModule,
    SegurancaModule,
    TemplateModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    MessageService,
    Title,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
