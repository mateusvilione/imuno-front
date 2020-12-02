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


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarFuncionarioComponent } from './pages/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { CadastrarPacienteComponent } from './pages/paciente/cadastrar-paciente/cadastrar-paciente.component';
import { CadernetaVacinacaoComponent } from './pages/caderneta-vacinacao/caderneta-vacinacao.component';
import { EditarPerfilPacienteComponent } from './pages/paciente/editar-perfil-paciente/editar-perfil-paciente.component';
import { EditarPerfilFuncionarioComponent } from './pages/funcionario/editar-perfil-funcionario/editar-perfil-funcionario.component';
import { VacinarComponent } from './pages/vacinar/vacinar.component';
import { DashboardFuncionarioComponent } from './pages/dashboard-funcionario/dashboard-funcionario.component';
import { DashboardPacienteComponent } from './pages/dashboard-paciente/dashboard-paciente.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { CadastrarPostoComponent } from './pages/posto/cadastrar-posto/cadastrar-posto.component';
import { EditarPostoComponent } from './pages/posto/editar-posto/editar-posto.component';
import { VacinaComponent } from './pages/vacina/vacina.component';
import { CadastrarLoteComponent } from './pages/lote/cadastrar-lote/cadastrar-lote.component';
import { EditarLoteComponent } from './pages/lote/editar-lote/editar-lote.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarPacienteComponent,
    CadernetaVacinacaoComponent,
    CadastrarFuncionarioComponent,
    EditarPerfilPacienteComponent,
    EditarPerfilFuncionarioComponent,
    VacinarComponent,
    VacinaComponent,
    DashboardFuncionarioComponent,
    DashboardPacienteComponent,
    DashboardAdminComponent,
    CadastrarPostoComponent,
    EditarPostoComponent,
    CadastrarLoteComponent,
    EditarLoteComponent,
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
  ],
  providers: [
    MessageService,
    Title,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
